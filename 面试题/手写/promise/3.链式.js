const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECT = "reject";

class MyPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.onFulFilledCallback = [];
    this.onRejectCallback = [];
    const resolve = (value) => {
      setTimeout(() => {
        if (this.status === PENDING) {
          this.status = FULFILLED;
          this.value = value;
          this.onFulFilledCallback.forEach((item) => item(this.value));
        }
      })
    };
    const reject = (value) => {
      setTimeout(() => {
        if (this.status === PENDING) {
          this.status = REJECT;
          this.value = value;
          this.onRejectCallback.forEach((item) => item(this.value));
        }
      })
    };
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : (v) => v;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : function (err) {
            throw err;
          };
    const myPromise = new MyPromise((resolve, reject) => {
      switch (this.status) {
        case FULFILLED:
          resolve(onFulfilled(this.value))
          break;
        case REJECT:
          reject(onRejected(this.value));
          break;
        case PENDING:
          this.onFulFilledCallback.push(() => {
            const v = onFulfilled(this.value)
            resolve(v)
          });
          break;
      }
    })
    return myPromise;
  }
}

new MyPromise(function (resolve, reject) {
  setTimeout(() => {
    resolve("args");
  });
})
  .then(function (x) {
    console.log('then-1', x);
    return 10
  })
  .then(function (x) {
    console.log("then-2", x);
  });
