
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('resolve')

//   }, 500)
// }).then(data => {
//   console.log(data)
// })
const PENDING = 'pending'
const REJECTED = 'rejected'
const FULFILLED = 'fulfilled'

const resolutionProcedure = (promise, target, resolve, reject) => {
  if (promise === target) return reject(new Error('error'))
  if (target instanceof MyPromise) {
    if (target.status === PENDING) {
      target.then(value => {
        resolutionProcedure(promise, value, resolve, reject)
      }, reject)
    } else {

      target.then(resolve, reject)
    }
    return
  }

  if (target !== null && (typeof target === 'object' || typeof target === 'function')) {
    let called = false
      try {
        const { then } = target
        if (typeof then === 'function') {
          then.call(target, (value) => {
            if (called) return
            called = true
            resolutionProcedure(promise, value, resolve, reject)
          }, reason => {
            if (called) return
            called = true
            reject(reason)
          })
        } else {
          resove(target)
        }
      } catch (reason) {
        if (called) return
        called = true
        reject(reason)
      }
    return
  }
  resolve(target)
}

class MyPromise {
  constructor (resolver) {
    this.status = PENDING
    this.value = undefined
    this.onRejectedCallback = []
    this.onFulfilledCallback = []

    this.reject = (reason) => {
      setTimeout(() => {
        if (this.status === PENDING) {
          this.status = REJECTED
          this.value = reason
          this.onRejectedCallback.forEach(cb => cb())
        }
      })
    }

    this.resolve = value => {
      if (value instanceof MyPromise) {
        return value.then(this.resolve, this.reject)
      }
      setTimeout(() => {
        if (this.status === PENDING) {
          this.status = FULFILLED
          this.value = value
          this.onFulfilledCallback.forEach(cb => cb())
        }
      })
    }
    try {
      resolver(this.resolve, this.reject)
    } catch (error) {
      this.reject(error)
    }
  }
  then (onResolve, num, onReject, tag) {
    console.log('into-then', num)
    onResolve = typeof onResolve === 'function' ? onResolve : v => v
    onReject = typeof onReject === 'function' ? onReject : function (err) { throw err }
    const promise = new MyPromise((resolve, reject) => {
      const handler = (fn) => {
        try {
          resolutionProcedure(promise, fn(this.value), resolve, reject)
        } catch (error) {
          console.error(error)
          reject(error)
        }
      }

      const resolveHandler = () => handler(onResolve)
      const rejectHandler = () => handler(onReject)
      switch (this.status) {
        case PENDING:
          this.onFulfilledCallback.push(resolveHandler)
          this.onRejectedCallback.push(rejectHandler)
          break;
        case FULFILLED:
          setTimeout(() => {
            resolveHandler()
          })
          break;
          case REJECTED:
            setTimeout(() => {
              rejectHandler()
            })
          break;
        default:
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
}

// setTimeout(()=>{
//  console.log('test') 
// })

// setTimeout(()=>{
//   console.log('test1') 
// },10)
 
const p = new MyPromise((resolve, reject) => {
  console.log('hahahah')
  resolve('success')
}).then(value => {
  console.log('promise1-then1')
}, '1')
.then(value => {
  console.log('promise1-then2')
},'5')
.then(value => {
  console.log('promise1-then3')
  new MyPromise((resolve)=>{
    console.log('promise2-then0')
    resolve()
  })
  .then(value => {
    console.log('promise2-then1')
  }, '2')
  .then(value => {
    console.log('promise2-then2')
  },'3')
  .then(value => {
    console.log('promise2-then3')
  },'4')
},'6')
.then(value => {
  console.log('promise1-then4')
},'7')
.then(value => {
  console.log('promise1-then4')
},'8')
// then执行的顺序问题