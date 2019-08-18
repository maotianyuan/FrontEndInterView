// new Promise((resolve,reject)=>{
//   console.log("promise1")
//   resolve() // 异步让出 向下执行
// }).then(()=>{
//   console.log("then11")
//   Promise((resolve,reject)=>{
//       console.log("promise2")
//       resolve() // 异步向下执行
//   }).then(()=>{
//       console.log("then21") // 然后在then内部先执行 ，在resolve 异步让出向下
//   }).then(()=>{
//       console.log("then23")
//   })
// }).then(()=>{
//   console.log("then12") // 
// })

// new Promise((resolve,reject) => {
//   console.log("promise1")
//   resolve()
// }).then(() => {
//   console.log("then11")
//   return new Promise((resolve,reject) => {  // 然后在then内部先执行 ，return是promise一直不让出一直执行
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
  new Promise((resolve,reject)=>{
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
// new Promise((resolve,reject)=>{
//   console.log("promise3")
//   resolve()
// }).then(()=>{
//   console.log("then31")
// })
// new Promise((resolve,reject)=>{
//   console.log("promise4")
//   resolve()
// }).then(()=>{
//   console.log("then41")
// })

// promise1
// promise3
// then11  // 3的resolve 晚于 promise1
// promise2 // 执行完 resolve 让出等待
// then31  // 3的resolve已经开始 优先于 promise2的resolve
// then21
// then12
// then23