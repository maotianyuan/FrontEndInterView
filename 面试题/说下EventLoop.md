EventLoop事件循环是JS运行机制
因为 JS 是单线程的，
为了协调事件、用户交互，引入了异步操作

运行机制分为
同步任务在祝线程上执行，形成执行栈，先进后出
异步任务有了运行结果，就在任务队列之中放一个事件：形成任务队列， 先进先出

不同的异步任务会分配到不同的队列中

任务源可以分为 微任务和宏任务
微任务包括  promise process.nextTick MutationObserver
宏任务 script setTimeout setInterval setImmediate I/O UI rendering requestAnimationFrame

他们是有先后顺序的

- 宏任务 - 微任务 - 渲染 - 宏任务 - 微任务 - 渲染
- 微任务 - 渲染 - 宏任务 - 微任务 - 渲染

- 首先执行同步代码，这属于宏任务
- 执行栈为空，查询是否有异步任务
- 执行微任务
- 如有必要渲染页面
- 下一轮