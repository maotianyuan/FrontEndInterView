# Vue中Axios定制化配置

- 一、Vue定义的 Vue.use 和 install方法
- 二、axios插件配置
- 三、axios.default 配置默认值
- 四、axios.interceptors 拦截器(请求/响应拦截)
- 五、axios.get/axios.post过滤(参数处理/取消重复请求/移除参数空值)
- 六、install

>背景：本文不着重讲解具体细致配置，而是表述Vue项目中axios中的定制化配置项

## 一、Vue定义的 Vue.use 和 install方法
```js
function initGlobalAPI (Vue) {
  ......
  initUse(Vue);
  initMixin$1(Vue); 
  ......
}

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    /* 判断过这个插件是否已经安装 */
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }
    var args = toArray(arguments, 1);
    args.unshift(this);
    /* 判断插件是否有 install 方法 */
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}
// 看完以上源码，我们知道插件（Axios）需要提供一个 install 方法
```

## 二、axios插件配置
```js
Vue.use(axios, args)
// 看第一模块源码得知，args参数最终 会作为axios中install方法的参数，
// 也知道 axios最终调用的是install方法，所以对axios自定义配置项可以写到axios的install方法中
// 所以定制化配置需要写在install中
```
```js
// 示例代码-部分
Vue.use(axios, {
  baseURL,
  beforeSend ({ url, options = {} }) {
    // 禁止Message提示
    if (options.noMessage && !exclude.includes(url)) {
      exclude.push(url)
    }
    if (url === 'xxxx') return 
    const token = store.state.token || ''
    if (process.env.NODE_ENV !== 'production' && token && token.includes('csrf_token')) {
      return store.dispatch(UPDATE_TOKEN)
    }
    if (!store.state.token) return store.dispatch(UPDATE_TOKEN)
  },
  // 拦截请求, 添加token
  interceptors: config => {
    ...
    config.headers['X-CSRF-TOKEN'] = store.state.token
    ...
    return config
  },
  // 注入请求接口状态
  setLoading (key, value) {
    if (key) {
      store.commit('SET_LOADING', { [key]: value })
    }
  },
  responseHandler (data, response) {
    // Json类型以外的数据不作处理
    const { responseType: type } = response.config
    if (type && resTypes.includes(type)) return response
    const { errcode } = data || {}
    if (typeof errcode === 'number' && errcode !== 0) {
      return Promise.reject(response)
    }
    if (data === null || typeof data !== 'object') {
      console.log(response)
      return Promise.reject(new Error('接口返回的数据格式不正确'))
    }
    return response
  },
  // 错误信息处理
  errorHandler (error) {
    if (!error) return
    const { config = {}, data = {}, response = {} } = error
    if (response.status === 419) {
      MessageBox.alert('登录已过期，点击确认刷新', '提示').then(() => {
        window.location.reload()
      })
    }
    const showMessage = !config.url || !exclude.includes(config.url.replace(config.baseURL || '', ''))
    const message = data.message || error.message
    if (data.errcode === 500) {
      Message.error('出了一点小状况,技术人员正在处理')
    } else if (showMessage && message) {
      Message.error(message)
    }
    if (window.errorHandler) {
      const { url, params } = config
      const { username: account } = store.getters.userInfo
      window.errorHandler({
        message,
        data: {
          url,
          data,
          params,
          account
        }
      })
    }
    return error
  }
})
```

## 三、axios.default 配置默认值
```js
  axios.defaults.baseURL = '/api'
  axios.defaults.tokenList = {} // cancelToken列表
  axios.defaults.withCredentials = true //表示跨域请求时是否需要使用凭证
  axios.defaults.retryDelay = 500 // 超时重试间隔
  axios.defaults.retry = 2 // 超时重试次数
  axios.defaults.timeout = 3000
```

## 四、axios.interceptors 拦截器(请求/响应拦截)
>拦截器即：在请求或响应被 then 或 catch 处理前拦截它们

- 添加请求拦截器
>应用场景：请求获取最新的token

```js
// 示例伪代码-部分
const interceptors = (config) => {
  config.headers['X-CSRF-TOKEN'] = this.store.state.token
  config.headers['X-Requested-With'] = 'XMLHttpRequest'
  return config
}
const reqHandleFunc = (interceptors) => {
  if (interceptors) {
    axios.interceptors.request.use(
      config => interceptors(config),
      error => Promise.reject(error)
    )
  }
}
```
- 添加响应拦截器
>应用场景：请求成功统一格式处理，请求失败错误统一处理(超时重试处理)
```js
// 示例伪代码-部分
const resHandleFunc = (responseHandler) => {
  axios.interceptors.response.use(
    response => {
      if (isFunction(responseHandler)) return responseHandler(response.data, response)
      return response
    },
    error => {
      if (error) {
        if (error.response) {
          let { status, config } = error.response
          const message = httpErrorMessage[status]
          error.message = status === 404 ? `${message}:${config.url}` : message
        }
      }
      /**
       * 超时重试处理
       */
      const config = error.config || {}
      const { status } = error.response || {}
      config.__retryCount = config.__retryCount || 0
      // 有重试次数且请求状态不为500或419时继续重试
      const needRetry = config.retry > 0 && config.__retryCount < config.retry && (!status || /^[^345]\d{2}/.test(status))
      if (needRetry) {
        config.__retryCount++
        return new Promise(resolve => {
          setTimeout(resolve, config.retryDelay || 1)
        }).then(() => axios({ ...config, baseURL: '' }))
      }
      return Promise.reject(error)
    }
  )
}
```

## 五、axios.get axios.post过滤(参数处理/取消重复请求/移除参数空值)
>应用场景： 添加axios get post参数过滤处理方法，例如（参数统一解构，loading状态添加, 创建cancelToken取消重复请求，取消请求，统一移除参数中的空值）
```js
// 示例伪代码-部分
axiosPost () {
  const axiosPost = axios.post
  axios.post = (url, params, options) =>
    this.handleWrap(axiosPost, {
      url,
      params,
      options
    })
}
axiosGet () {
  const axiosGet = axios.get
  axios.get = (url, params, options) =>
    this.handleWrap((url, params, opt) => axiosGet(url, { params, ...opt }), {
      url,
      params,
      options
    })
}
// 示例伪代码-部分
async handleWrap (handle, opt = {}) {
  const { url, params = {} } = opt
  const { loading, cancel, get, default: defaultValue, ...options } = opt.options || {}
  // 创建cancelToken, 取消重复请求
  const cancelToken = this.handleCancel(cancel, `取消请求: ${url}; 请求参数:${JSON.stringify(params)}`)
  // 开启loading
  this.setLoading(loading, true)
  if (this.beforeSend) {
    await this.beforeSend(opt)
  }
  // 移除参数中的空值
  const data = this.removeEmptyValue(params)

  return new Promise((resolve, reject) => {
    handle(url, data, { ...options, cancelToken })
      .then(data => {
        // 可选链式调用
        if (get) {
          const _data = axios.$utils.get(data.data, get, defaultValue)
          resolve(_data)
        } else {
          resolve(data)
        }
        // 请求结束之后关闭loading
        this.setLoading(loading, false)
        // 清除canceltoken
        if (typeof cancel === 'string') {
          this.clearToken(cancel)
        }
      })
      .catch(error => {
        // 请求结束之后关闭loading
        this.setLoading(loading, false)
        // 清除canceltoken
        if (typeof cancel === 'string') {
          this.clearToken(cancel)
        }
        // 被取消的请求不需要抛出错误
        if (axios.isCancel(error)) {
          this.debug && console.log(error.message)
        } else {
          if (isFunction(this.errorHandler)) {
            const err = this.errorHandler(error)
            if (err instanceof Promise) return err.then(resolve).catch(reject)
            if (err) reject(err)
          } else {
            reject(error)
          }
        }
      })
  })
}

```

## 六、install
```js
axios.install = (Vue, options = {}) => {
  // eslint-disable-next-line no-new
  new AxiosConfig(options)
  Vue.prototype.$http = Vue.prototype.axios = Vue.prototype.$axios = axios // 全局使用
  Vue.prototype.$axiosAllSpread = axiosAllSpread
}
```
[axios中文文档](http://www.axios-js.com/zh-cn/docs/index.html)
[axios GitHub](https://github.com/axios/axios)

