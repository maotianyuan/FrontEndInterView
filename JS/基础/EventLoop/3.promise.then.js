// new Promise((resolve,reject)=>{
//   console.log("promise1")
//   resolve() // 异步让出 向下执行
// }).then(()=>{
//   console.log("then11")
//   return new Promise((resolve,reject)=>{
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

// ---------------

// 重点是Promise而非 Eventloop
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

// ---------------

new Promise((resolve, reject) => {
  console.log("promise3");
  resolve();
  console.log("promise4");
}).then(() => {
  console.log("then31");
});
console.log("12");
new Promise((resolve, reject) => {
  console.log("promise4");
  resolve();
}).then(() => {
  console.log("then41");
});
