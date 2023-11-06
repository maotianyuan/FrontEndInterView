# webview 和原生交互是如何实现的，搭桥的原理

## 方式一 注入式

### Android
Android: webView.addJavascriptInterface('', 'JSBridge')
H5: window.JSBridge.postMessage()

```js Android
webView.addJavascriptInterface(new WebAppInterface(this), "JSBridge");
```

### iOS 安全
iOS: 
H5: window.webkit.messageHandlers.JSBridge.postMessage("Hello, iOS!");

evaluateJavaScript 在webview容器中执行js

## 方式二：iframe 拦截式

基于 iframe 修改 src 值，NA 可以捕获 url 变化，根据 url 变化，判断 H5 的意图
WebView url scheme 拦截。
* FE 通过 scheme 拦截的方式向 native 主动发送消息
* 例如：<iframe src="ihybrid://toast?data={parmas: \"test\"}&**callback**=**cb**common**32423**2"></iframe>
* 如果 native 收到消息后需要将处理结果回传给 FE
* 通过调用 FE 发送消息时参数中携带的回调函数
* 这个回调函数挂载在 window 上面
* 例如：window.**cb**common**32423**2(res);

```js

function createHybrid() {
  var protocol = !isLocal ? 'ihybrid://' : '/action/'
  var callbackCount = 0

  function createBridge() {
      var bridge = document.createElement('iframe')
      bridge.setAttribute('style', 'display:none;')
      bridge.setAttribute('height', '0px')
      bridge.setAttribute('width', '0px')
      bridge.setAttribute('frameborder', '0')
      document.documentElement.appendChild(bridge)
      return bridge
  }

  function buildUrl(action: any, params: any, callback: any) {
      var url = protocol + action + '?'
      var id = guid()
      url += 'data=' + encodeURIComponent(JSON.stringify(params || {}))
      if (callback) {
        var callbackName = '__cb__' + action + '__' + id + '__' + callbackCount++
        if (isLocal) {
            __cb__ = callbackName
        }
        win[callbackName] = function() {
          let args: any = arguments;
          args = [].slice.call(args)
          if(args.length === 0) args.push('');
          args.push(callbackName)
          callback && callback.apply(window, args)
          if (typeof (callback.remove) == 'function') {
            !!callbackName && callback.remove.apply(callback, [callbackName])
          } else {
            delete win[callbackName]
          }
        }
        url += '&__callback__=' + callbackName
      }
      return url
  }

  return function (action: any, params?: any, callback?: Function) {
      let bridge: any = createBridge()
      if (params && Object.prototype.toString.call(params) === '[object Function]') {
          callback = params
          params = {}
      }
      var url = buildUrl(action, params, callback);

      callback && isLocal && (bridge.onload = function(){
          var data = {};
          try {
              data = JSON.parse(bridge.contentDocument.body.children[0].textContent || "{}");
          } catch (e) {}  

          win[__cb__](data);
          __cb__ = null;
      });

      bridge.setAttribute('src', url);
      (function (bridge) {
          bridge.timer = setTimeout(() => {
            bridge.parentNode.removeChild(bridge)
            clearTimeout(bridge.timer)
          }, 3000)
      })(bridge);
  }
}

```