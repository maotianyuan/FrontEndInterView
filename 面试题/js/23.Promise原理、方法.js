//  Promise原理、方法，promise race all allsetted

class MyPromise {
  constructor(exector) {
    this.success = [];
    this.resolve = () => {
      this.success.map(fn => fn());
    }
    exector(this.resolve)
  }
  then(fn) {
    this.success.push(fn)
  }
}


const task = new MyPromise((resolve) => {
  setTimeout(() =>{
    resolve()
  })
})
task.then(() => { console.log(1) })
task.then(() => { console.log(2) })

