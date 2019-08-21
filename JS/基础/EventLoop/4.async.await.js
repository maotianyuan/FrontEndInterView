async function async1() {
  console.log("async1 start");
  await  async2();
  console.log("async1 end");
}
async function async2() {
  console.log( 'async2');
}
async1()
// 用于test的promise，看看await究竟在何时执行
new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
}).then(function () {
  console.log("promise3");
}).then(function () {
  console.log("promise4");
}).then(function () {
  console.log("promise5");
});



// async/await有时候会推迟两轮microtask，
// 在第三轮microtask执行，主要原因是浏览器对于此方法的一个解析，由于为了解析一个await，要额外创建两个promise，因此消耗很大。
//后来V8为了降低损耗，所以剔除了一个Promise，并且减少了2轮microtask，所以现在最新版本的应该是“零成本”的一个异步。



// async function async1() {
//   console.log("async1 start");
//   await async2();
//   console.log("async1 end");
// }
// async function async2() {
//   console.log('async2');
// }
// console.log("script start");
// setTimeout(function () {
//   console.log("settimeout");
// });
// async1()
// new Promise(function (resolve) {
//   console.log("promise1");
//   resolve();
// }).then(function () {
//   console.log("promise2");
// });
// // setImmediate(()=>{
// //   console.log("setImmediate")
// // })
// // process.nextTick(()=>{
// //   console.log("process")
// // })
// console.log('script end'); 
