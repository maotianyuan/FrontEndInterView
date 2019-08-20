class Test {
  constructor (fn) {
    this.arr = []
    this.name = ''
    this.resolve = () => {
      console.log(this)
      setTimeout(() => {
        console.log(this)
      })
    }
    fn(this.resolve)
  }
  then (name, arr = [], fn) {
    console.log('then', name)
    return new Test(resolve => {
      this.name = name
      this.arr = arr
      fn(resolve)
    })
  }
}
new Test(resolve =>{
  console.log('into')
  resolve()
}).then('then1', [1,3], resolve => {
  resolve()
}).then('then2', [2,4], resolve => {
  resolve()
}).then('then10', [12,14], resolve => {
  resolve()
})