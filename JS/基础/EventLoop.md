## Event Loop

### 什么是Event Loop
>JS这种运行机制又称为Event Loop(事件循环)

### 运行机制
- 所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。
- 线程之外，还存在"任务队列"(task queue)。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。
- 一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。

### 进程与线程
相信大家经常会听到 JS 是*单线程*执行的，但是你是否疑惑过什么是线程？

讲到线程，那么肯定也得说一下进程。本质上来说，两个名词都是 *CPU 工作时间片*的一个描述。

进程描述了 CPU 在*运行指令及加载和保存上下文*所需的时间，放在应用上来说就代表了一个程序。*线程是进程中的更小单位*，描述了执行一段指令所需的时间。

把这些概念拿到浏览器中来说，当你打开一个 Tab 页时，*其实就是创建了一个进程，一个进程中可以有多个线程，比如渲染线程、JS 引擎线程、HTTP 请求线程等等*。当你发起一个请求时，其实就是创建了一个线程，当请求结束后，该线程可能就会被销毁。

上文说到了 JS 引擎线程和渲染线程，大家应该都知道，在 JS 运行的时候可能会阻止 UI 渲染，这说明了两个线程是互斥的。这其中的原因是因为 JS 可以修改 DOM，如果在 JS 执行的时候 UI 线程还在工作，就可能导致不能安全的渲染 UI。这其实也是一个单线程的好处，得益于 JS 是单线程运行的，可以达到节省内存，节约上下文切换时间，没有锁的问题的好处。当然前面两点在服务端中更容易体现，对于锁的问题，形象的来说就是当我读取一个数字 15 的时候，同时有两个操作对数字进行了加减，这时候结果就出现了错误。解决这个问题也不难，只需要在读取的时候加锁，直到读取完毕之前都不能进行写入操作。

### 执行栈
可以把执行栈认为是一个*存储函数调用的栈结构*，遵循先进后出的原则

当开始执行 JS 代码时，首先会执行一个 main 函数，然后执行我们的代码。根据先进后出的原则，后执行的函数会先弹出栈，在图中我们也可以发现，foo 函数后执行，当执行完毕后就从栈中弹出了。

### 浏览器中的 Event Loop

- 异步代码执行顺序？解释一下什么是 Event Loop ？

上一小节我们讲到了什么是执行栈，大家也知道了当我们执行 JS 代码的时候其实就是*往执行栈中放入函数*，那么遇到异步代码的时候该怎么办？其实当遇到异步的代码时，会被挂起并在需要执行的时候加入到 *Task（有多种 Task）* 队列中。一旦执行栈为空，Event Loop 就会从 Task *队列中拿出需要执行的代码并放入执行栈*中执行，所以本质上来说 JS 中的异步还是同步行为。

不同的任务源会被*分配到不同的 Task 队列中*，任务源可以分为 *微任务（microtask*） 和 *宏任务（macrotask）*。在 ES6 规范中，microtask 称为 jobs，macrotask 称为 task。下面来看以下代码的执行顺序：
```js
 async function async1() {
    console.log( 'async1 start' )
    await async2()
    console.log( 'async1 end' )
  }

  async function async2() {
    console.log( 'async2' )
  }

  console.log( 'script start' )

  setTimeout( function () {
    console.log( 'setTimeout' )
  }, 0 )

  async1();

  new Promise( function ( resolve ) {
    console.log( 'promise1' )
    resolve();
  } ).then( function () {
    console.log( 'promise2' )
  } )

  console.log( 'script end' )
  //  script star -> async1 start -> async2 -> promise1 -> script end -> promise2 -> async1 end -> setTimeout
```
所以 Event Loop 执行顺序如下所示：

- 首先执行同步代码，这属于宏任务
- 当执行完所有同步代码后，执行栈为空，查询是否有异步代码需要执行
- 执行所有微任务
- 当执行完所有微任务后，如有必要会渲染页面
- 然后开始下一轮 Event Loop，执行宏任务中的异步代码，也就是 setTimeout 中的回调函数

所以 Event Loop 执行顺序如下所示：

*微任务*包括 process.nextTick ，promise ，MutationObserver，其中 process.nextTick 为 Node 独有。
*宏任务*包括 script ， setTimeout ，setInterval ，setImmediate ，I/O ，UI rendering。

**为微任务快于宏任务，其实是错误的。因为宏任务中包括了 script ，浏览器会先执行一个宏任务，接下来有异步代码的话才会先执行微任务。**

### Node 中的 Event Loop
- Node 中的 Event Loop 和浏览器中的有什么区别？process.nexttick 执行顺序？

Node 中的 Event Loop 和浏览器中的是完全不相同的东西。

Node 的 Event Loop 分为 6 个阶段，它们会按照顺序反复运行。每当进入某一个阶段的时候，都会从对应的回调队列中取出函数去执行。当队列为空或者执行的回调函数数量到达系统设定的阈值，就会进入下一阶段


### 为什么会需要 Event Loop?
因为 JavaScript 是单线程的。单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个任务就不得不一直等着。为了协调事件（event），用户交互（user interaction），脚本（script），渲染（rendering），网络（networking）等，用户代理（user agent）必须使用事件循环（event loops）。

[Event Loop](https://juejin.im/post/5a6547d0f265da3e283a1df7#heading-13)
[8张图让你一步步看清 async/await 和 promise 的执行顺序](https://segmentfault.com/a/1190000017224799)
[深入理解JS引擎的执行机制](https://segmentfault.com/a/1190000012806637)