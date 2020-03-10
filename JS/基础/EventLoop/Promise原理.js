const PENDING = 'pending';
const RESOLVE = 'resolve';
const REJECT = 'reject';



function resolutionProcedure (promise, x, resolve, reject) {
  
  if (promise === x) return reject(new Error('TypeError: Chaining cycle detected for promise #<Promise>')) 

  if ((typeof x === "object" && x !== null) || typeof x === "function") {
    let called = false
      try {
        const { then } = x
        if (typeof then === 'function') {
          then.call(x, (value) => {
            if (called) return
            called = true
            resolutionProcedure(promise, value, resolve, reject)
          }, reason => {
            if (called) return
            called = true
            reject(reason)
          })
        } else {
          resove(x)
        }
      } catch (reason) {
        if (called) return
        called = true
        reject(reason)
      }
    return
  }
  resolve(x)
}

class MyPromise {
  constructor (executor) {
    this.status = PENDING
    this.value = undefined
    let _this = this
    this.onFullfilledCallback = []
    this.onRejectedCallback = []
    function resolve (value)  {
      setTimeout(() => {
        if (_this.status === PENDING) {
          _this.status = RESOLVE
          _this.value = value
          _this.onFullfilledCallback.map(fn=>fn())
        }
      })
    }
    function reject (value) {
      setTimeout(() => {
        if (_this.status === PENDING) {
          _this.status = REJECT
          _this.value = value
          _this.onRejectedCallback.map(fn=>fn())
        }
      })
    }
    try {
      executor(resolve, reject)
    } catch(e) {
      reject(e)
    }
  }
  then(onFullfilled, onRejected){
    onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : v => v
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err}
    let _this = this;
    const promise = new MyPromise (function(resolve, reject){
       
      const handler = (fn) => {
        try {
          resolutionProcedure(promise, fn(_this.value), resolve, reject)
        } catch (error) {
          console.error(error)
          reject(error)
        }
      }

      const resolveHandler = () => handler(onFullfilled)
      const rejectHandler = () => handler(onRejected)

      switch(_this.status){
        case RESOLVE:
          setTimeout(() => {
            resolveHandler()
          })
          break;
        case REJECT:
          setTimeout(() => {
            rejectHandler()
          })
          break;
        case PENDING:
          _this.onFullfilledCallback.push(resolveHandler)
          _this.onRejectedCallback.push(rejectHandler)
          break;
      }
    })
    return promise
  }
  catch (onReject) {
    return this.then(null, onReject)
  }
  finally (callback) {
    return this.then(() => callback(), () => callback())
  }
  static resolve (value) {
    const p = new MyPromise(() => {})
    p.resolve(value)
    return p
  }
  static reject (value) {
    const p = new MyPromise(() => {})
    p.reject(value)
    return p
  }
  static race (entries) {
    if (Array.isArray(entries)) {
      return new MyPromise((resolve, reject) => {
        for (const item of entries) {
          this.resolve(item).then(resolve, reject)
        }
      })
    }
    return 
  }
  static all (entries) {
    if (Array.isArray(entries)) {
      if (entries.length === 0) return this.resolve([])
      return new MyPromise((resolve, reject) => {
        const result = []
        let n = 0
        for (const item of entries) {
          this.resolve(item).then(data => {
            result.push(data)
            n++
            if (n === entries.length) {
              resolve(result)
            }
          }, reject)
        }
      })
    }
    return Promise.reject(new Error(`You must pass an array to all.`))
  }
}
