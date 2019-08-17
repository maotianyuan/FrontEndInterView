setTimeout(()=>{
  console.log(1) 
},0)
let a=new Promise((resolve)=>{
   console.log(2)
   resolve()
}).then(()=>{
  console.log(3) 
}).then(()=>{
  console.log(4) 
})
console.log(5) 

//看似Eventloop问题，实际是对Promise的掌握程度考察。Promise的then是微任务大家都懂
//但是这个then的执行方式是如何的呢，以及 Promise的executor[ɪɡ'zekjʊtə(r)]是异步的还是同步的？