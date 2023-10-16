const PENDING = 'PENDING'
const REJECTED = 'REJECTED'
const FULLFILED = 'FULLFILED'

class MyPromise {
  constructor(fn) {
    this.value = null;
    this.status = PENDING
    this.fullfiledcb = []
    const resolve = (value) => {
      if (this.status === PENDING) 
      this.status = FULFILLED;{
        this.value = value;
        fullfiledcb.map(item => item(this.value))
        this.status = FULLFILED;
      }
    }
    fn(resolve)
  }
  then(onFulfilled) {
    return new MyPromise((resolve) => {
      switch (this.status) {
        case PENDING:
          fullfiledcb.push(() => {
            const v = onFulfilled(this.value)
            if (typeof v === 'object' && v !== null) {
              let then = v.then;
              if (typeof then === 'function') {
                then.call(
                  v, (y) => 
                )
              } else {
                resolve(v)
              }
            } else {
              resolve(v)
            }
          });
          break;
        case FULLFILED:
          onFulfilled(this.value);
          break;
      }
    })
  }
}

new MyPromise((resolve) => {
  console.log("sync");
  setTimeout(() => {
    resolve("data");
  }, 1000);
})
  .then((data) => {
    console.log(data);
    return "abc";
  })
  .then((data) => {
    console.log(data);
  });
