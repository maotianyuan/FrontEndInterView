// new Promise((resolve,reject)=>{
//   console.log("promise1")
//   resolve()
// }).then(()=>{
//   console.log("then11")
//   new Promise((resolve,reject)=>{
//       console.log("promise2")
//       resolve()
//   }).then(()=>{
//       console.log("then21")
//   }).then(()=>{
//       console.log("then23")
//   })
// }).then(()=>{
//   console.log("then12")
// })

//按照上一节最后一个microtask的实现过程，
//也就是说一个Promise所有的then的回调函数是在一个microtask函数中执行的，
//但是每一个回调函数的执行，又按照情况分为立即执行，微任务(microtask)和宏任务(macrotask)。



// new Promise((resolve,reject) => {
//   console.log("promise1")
//   resolve()
// }).then(() => {
//   console.log("then11")
//   return new Promise((resolve,reject) => {
//       console.log("promise2")
//       resolve()
//   }).then(()=>{
//       console.log("then21")
//   }).then(()=>{
//       console.log("then23")
//   })
// }).then(()=>{
//   console.log("then12")
// })


// 重点是Promise而非Eventloop



new Promise((resolve,reject)=>{
  console.log("promise1")
  resolve()
}).then(()=>{
  console.log("then11")
  return new Promise((resolve,reject)=>{
      console.log("promise2")
      resolve()
  }).then(()=>{
      console.log("then21")
  }).then(()=>{
      console.log("then23")
  })
}).then(()=>{
  console.log("then12")
})
new Promise((resolve,reject)=>{
  console.log("promise3")
  resolve()
}).then(()=>{
  console.log("then31")
})
