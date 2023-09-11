# js

- 基础
  - 28.[]+{}
  - 34.a===1&&a===2&&a===3 为 true
  - 35.isNaN 和 number.isNaN 区别
  - 32.0.1 + 0.2 !== 0.3，如何解决上面说的精确度丢失问题，number 最大数 大数、小数
  - 🏷️ 38.位运算
  - 40.'use strict' 的作用是什么
  - 9.typeof、数据类型、instanceof、手写 instanceof
  - 12.事件机制捕获、冒泡
  - 5.引用类型怎么存储，js 中的堆和栈有什么区别
  - 2.`for...in` 和 `for...of` 的区别
- 数组
  - 3.map，forEach 的区别
  - 6.slice，splice，区别，是否改变数组
  - 11.ES6 上数组上扩展了哪些方法
  - 15.实现 reduce foreach, forEach 与 for 循环，谁的性能更好
- 作用域
  - 19.JS 垃圾回收和 v8 的垃圾回收机制有什么区别
  - 🏷️ 27.什么是作用域链、执行上下文、词法环境
- 对象
  - 7.Object.prototype.toString 返回什么
  - 10.什么是面向对象
  - 16.ES6 中 Reflect 对象，它什么优点
  - 17.JS 中有哪些方法可以实现继承
  - 26.new 操作符, 构造函数和普通函数区别, 函数有 return 返回什么
  - 37.正则
  - 18.深拷贝和浅拷贝
  - 4.symbol 是否可以遍历，symbol 怎么用？是否可以为空
- 函数
  - 1.`['1', '2', '3'].map(parseInt)` 返回值是
  - 8.闭包，场景
  - 13.JS 中通过 `bind` 绑定的方法，再使用 `apply` 或 `call` 会改变它的 `this` 吗，几个原理
  - 30.箭头函数于普通函数区别
  - 31.柯里化
  - 36.随机数
  - 41.如何判断是 new 还是函数调用
  - 🏷️ 25.防抖和节流应用场景
- 异步
  - 14.事件循环
  - 21.ajax fetch axios 区别，ajax 实现原理, axios 原理是什么
  - 22.不用 promise, 那些可实现 promise generator
  - 🏷️ 23.Promise 原理、方法，promise race all allsetted
  - 24.为什么原生的 form 表单提交没有跨域问题（form 请求和 ajax 请求有什么不同）
- 其他
  - 29.模块化
  - 🏷️ 33 RAF 和 RIC 是什么
  - 39.进程通信的几种方式
  - 20.设计模式了解应用，发布订阅模式, 单例模式，保证只有给弹窗，当一个弹窗打开的时候，关闭其他弹窗
- API
  - 🏷️ Worker
  - 🏷️ Proxy
  - 🏷️ AudioContext

# css

- 盒子模型
  - 6.BFC 应用、盒子模型
- 选择器
  - 22.选择优先级
- 布局
  - 1.水平垂直居中
  - 2.几个简单的 css 问题：flex 布局、动画
  - 7.左边定宽度，右边自使用，高度填满整个屏幕
  - 8.圣杯、双飞翼布局
  - 10.grid fr grid-template-columns
  - 17.为什么 marign 0 auto 无法垂直居中
- 属性
  - 3.position 那些值，作用什么
  - 4.display none opacity: 0 visibility:hidden
  - 🏷️ 9.css 的 transform 和 animation 区别
  - 12.哪些 css 可以开启硬件加速 transform\opacity\filter
  - 14.css3 属性
  - 16.伪元素 ::before 与伪类 :first-child 的区别
  - 18.z-index
  - 23.inline-block 间隙根本原因
- 单位
  - 13.1px dip dp
  - 15.css 中的 px，rem，em，vw，vh
- 优化
  - 5.回流&重绘
  - 21.硬件加速
  - 24.font-display 控制字体加载和替换
- 其他
  - 11.css 中的 scope 为什么可以实现局部作用
  - 19.元素替换
  - 20.画一个三角形

# HTTP

- 请求方法
  - 1.post 和 put 请求有什么区别
  - 9.get 和 post 有什么区别
- 请求头
  - 13.content-Type;
- 优化
  - 2.http 缓存原理，前端缓存了解哪些，网络缓存和前端缓存如何交互，协商缓存浏览器如何判断
  - 3.说几个缓存相关的 HTTP 状态码， 301 和 302 区别，浏览器接收到 301 302 如何处理
  - 7.CDN 理解，有 CDN 和没有 CDN 区别
- 网络模型
  - 14.理想模型
- 协议
  - DNS
    - 8.DNS 寻址过程
    - 11.谈谈你对 dns-prefetch 的理解
  - TCP
    - 4.三次握手，四次挥手，为什么挥手不能用三次
    - 10.TCP 和 UDP 区别是什么
    - 12.TCP 滑动窗口、重试机制
- 版本
  - 5.http1 和 http2 的区别， http2 做了那些改进，有哪些不足，http3 做了那些改进
- https
  - 6.http 和 https 的区别, https 加密过程
- websocket
  - 🏷️ 15.心跳机制

# 浏览器

- 1.浏览器进程，渲染过进程，渲染流程
- 2.defer
- 3.浏览器安全方面做了哪些， xss 工具方式是怎样，如何做，前端在 XSS、XSF 防御是如何做的
- 4.输入 url 到看到页面发生了什么
- 🏷️ 5.跨域
- 6.onload 和 DOMContentLoaded 的区别
- 浏览器通信：两个标签页想要共享 sessionStorage 的数据，如何做呢
- Echarts 渲染内核有哪些模式？canvas 和 svg 的区别

# TS

基础、断言、联合、字面量、函数、类、索引、内置、条件

- 基础类型：any unknown never void null undefined enum string boolean tuple symbol bigint
  - unknown 将或者取任意值
  - never 不能取任意值 return throw new Error('Unknown type')
  - tuple 元祖 已知数量和类型的数组 let arr:[string, number] = ['abc', 1]
  - enum 枚举 enum Gender { MALE, FEMALE} === {'0': MALE, '1': FEMALE, MALE: 0, FEMALE: 1}
  - strictNullChecks: true --> undefined null 不能赋值给 number
  - void 函数返回
- 断言类型
  - 非空: let x!: number
  - 确定赋值: ref.current!.scrollTop 不可能为空
  - as HTMLInputElement
  - as const 值不能更改
- 联合类型 ｜
  - 类型的联合
- 字面量类型 type
  - 字面量类型 type 值的联合, 用来生命一个新的类型
- 函数
  - function sum(a: string, b: string):string { return a+b; }
  - type sum = (a: string, b: string) => string
  - 重载
    - Function attr(val: number): void
    - Function attr(val: string): void
- 类
  - 间写 class Animal { constructor(public name: string, public age: number) {this.name = name, this.age = age })
  - 修饰符 protected 子类允许访问，子类实例不行
  - abstract class Animal 子类必须实现抽象类的抽象方法，无法实例，只可继承 extends
  - implements 类将需要实现需要实现的类的所有属性和方法。
  - static 只能通过类名访问, 静态方法中的 super 指代的是父类
  - interface 类型 UserInfo['address']
  - 交叉类型 &
  - 泛型 T
  - 装饰器
- 索引类型
  - keyof UserInfo ---> 'name' | 'address'
    type TypeToNumber<T> = {
    [key in keyof T]: number
    }
- 内置类型
  - ReadOnly<obj>
  - Pick<UserInfo, 'name' | 'address'> 抽取
  - Omit<UserInfo, 'name'> = address 排除
  - DeepPartial<obj> 可选
  - Partial<obj> 可选
  - Required<obj> 必选
  - Record<'x'|'y', obj> --- {x: obj, y: obj}
- 条件类型
  - Exclude 排除类型
  - type Exclude<T, U> = T extends U ? never : T;
  - type MyExclude = Exclude<'1' | '2' | '3', '1' | '2' ｜ '4'> == 3 4
  - Extract 抽取
    - 例子：Array<Extract<keyof T, keyof K>>
    - type Extract<T, U> = T extends U ? T : never;
    - type MyExtract = Extract<'1' | '2' | '3', '1' | '2'> === 1 2
- 规范
  - T type 类型，类型参数名
  - K 对象键
  - V 对象值
  - P 对象属性
  - R 类型推导结果
- 声明文件
  - 可以配置 tsconfig.json 文件中的 declaration 和 outDir
  - declaration: true, 将会自动生成声明文件、outDir: '', 指定目录
  ```ts
  declare namespace QueryString {
    type defaultEncoder = number;
    interface IStringifyOptions {}
    function parse(
      str: string | Record<string, string>,
      options?: IParseOptions
    ): { [key: string]: unknown };
  }
  ```
- ts 中的类型断言如何做的 (a1 as string).length \ (<number>a1).toFixed(2)
- ts 有哪些类型: any number string array boolean null undefined enum tuple void never
- 🏷️ ts 中的泛型 <T>

# vue

- vue2
  - 1.vue 响应式原理 手写
  - 2.vue 数组是否响应
  - 3.虚拟 dom
  - 4.全局注册组件、vue use 干了什么
  - 5.vue 组件如何通讯
  - 8.有使用过自定义指令吗？有哪些钩子函数？分别代表什么呢
  - 9.Vue.minxins 做过什么功能，mixins.js 和 组件中生命周期函数执行顺序，以及选项合并策略
  - 10.compiler diff 原理
  - computed 和 watch 的区别
  - v-model 双向绑定的原理是什么？
  - keep-alive LRU
- 周边
  - 7.vuex 的数据流 核心原理是什么 单一数据源响应式机制 状态管理一致性
  - 11.vue-router
  - vue-router 原理、模式区别,vue-router 路由模式有什么？实现原理是什么 hashchange，window.history.pushState
  - vue-router 怎么实现的？components 组件干了什么
  - axios 如何处理携带 cookies axios.defaults.withCredentials = true;
  - computed 的底层原理
  - pinia: ts、第三方、去除 mutation、没嵌套、
- vue3
  - 6.reactive ref 区别
  - vue3 源码响应式实现
  - Vue3 为什么 比 Vue2 快？
    - diff: 静态提升、动态跳过
    - 响应式
- 区别
  - Vue2 和 Vue3 区别
    - 响应式
    - diff
    - Composition API 模块的拆分
    - 风格：选项式 组合式
    - 根结点
  - vue2 和 vue3 核心 diff 算法区别？
    - vue2: 双指针、key、diff 粒度包含所有子树
    - vue3: 静态提升、动态跳过、逐级更新、Fragment 支持多根
  - react vs vue

# webpack

- 1.webpack 中 loader 和 plugin 的区别
- 2.webpack 的三种 hash、chunkHash、contentHash 有什么区别
- 3.source map 怎么用
- 4.如何实现一个 plugin 插件
- 5.webpack 构建过程
- 6.webpack 构建优化、前端性能优化
- 7.loader 执行顺序
- 8.webpack 分包加载用的是哪个，分包的原理
- 9.webpack 的 tree shaking 是怎么实现的
- 10.热更新 HMR
- 11.讲一下 Rollup 和 webpack 的区别

# 优化

https://mp.weixin.qq.com/s/9ifXga_Z4Q51SJbLgr4fPQ

- B
  - 懒加载
  - 长列表优化
  - keep-alive
- 通用
  - 打包构建
- C
  - 业务：proxy
  - 方案：视频、跨容器
- 性能优化，你会从哪几个方面考虑性能优化
- vuecli 升级
- 内存泄露怎么解决，怎么定位，内存泄漏的方式有哪些
- 项目优化
- 白屏优化措施
- performance, 怎么通过 Performance 解决性能问题的
- 新能指标、RAIL

# 项目

- B

  - 🏷️ 微前端

    - 样式隔离(shadow): 浏览器技术 $ele.attachShdow({mode: 'open'})
    - 沙箱隔离：JS 运行环境隔离，快照沙箱（不支持多个实例），proxy 代理沙箱
    - 数据隔离
    - 路由隔离

  - 脚手架
  - 组件库、单元测试
  - 按钮权限

- C
  - 帮助工具
  - mix
- 通用
  - vue3.0 vite ts

# 题

- https://www.yuque.com/zaotalk/interview/iv3pyp#ehMC
- http://muyiy.cn/question/js/2.html
- https://juejin.cn/post/7028478428680552456#heading-40
- [飞书](https://m26bxrpatp.feishu.cn/base/appcn5mUun8tTLsaFG0jrTeUnBg?table=tbllAUETZhGVTWMA&view=vewJHSwJVd)
- https://mp.weixin.qq.com/s/RJxR9Fsbv8oTl6GXWY4oaQ
- https://q.shanyue.tech/

---

---

---

---

# node

- 负载均衡、node 开启 cpu 个数的进程，并实现简单的负载均衡
- a 模块引用了 b 模块 b 模块引用 a 模块，node 是怎么避免模块的循环引用的
- 项目开发中用过 node 吗，做了哪些，如何实现 koa 中间件，typeorm 解决的什么问题，数据库连接的一个工具，能够支持数据库的一些模型，本身支持 ts 编译自动生成 ts 类型定义有对应的 cri，比较方便也支持 es6 的一些语法
- 使用 node 读取一个大文件，怎么控制读写速度的呢。stream，data
- 事件循环

# react

- redux 源码
- 有用过 hooks 吗？介绍几个常用的 hooks
- setState 原理，什么时候同步异步
- 为什么有合成事件

# H5

- H5 屏幕适配方案对比
- 移动端适配的原理及多种方案对比
- webview 和原生交互是如何实现的，搭桥的原理
- 然后问了一下移动端兼容性问题，比如键盘遮挡 input

# 小程序

- 小程序的原理
- 小程序传值方式
- 小程序更新数据及如何优化这个更新数据的性能开销
- 小程序内嵌 H5 传值、小程序如何传递 cookie 到 H5
- 小程序多端如何实现
- 小程序和 webview 内嵌有什么区别
- 小程序中的 js 和浏览器中的 js 的区别
- 微信 sdk 源码是否有看过
- 小程序分包怎么用，分包的原理是什么

# 其他

- 最近有学习什么新技术
- flutter 中 widget 用过哪些
- 图片处理时如果图片时倒过来的怎么处理
- cicd 发布流程，前端做了什么
- 如何解决跨域，cors，设置*后一直可以跨域吗，什么情况配*下不可以，如果配置是个域名，只返回个域名行吗
- git merge rebase 区别
- 聊 Web Workers 与 WebAssembly 技术
- electron 有哪些进程
- LRU
