const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECT = "reject";

class MyPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    const resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
      }
    };
    const reject = (value) => {
      if (this.status === PENDING) {
        this.status = REJECT;
        this.value = value;
      }
    };
    try {
      executor(resolve, reject); // 同步执行，参数为我们定义的 resolve
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
    switch (this.status) {
      case FULFILLED:
        onFulfilled(this.value);
        break;
      case REJECT:
        onRejected(this.value);
        break;
    }
  }
}

new MyPromise(function (resolve, reject) {
  resolve("args");
}).then(function (x) {
  console.log(x);
});