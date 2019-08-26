// setTimeout(()=>{
//   console.log(1)
// },0)
// Promise.resolve().then(()=>{
//   console.log(2)
// })
// console.log(3)

// // 这个是属于Eventloop的问题 main script 运行结束后，会有微任务队列和宏任务队列。微任务先执行，之后是宏任务。



for(var i = 0; i < 10; i++) {
  setTimeout(()=>{
    console.log(i)
  })
}