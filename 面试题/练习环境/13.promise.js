let PENDING = "pending";
let FULLFILLED = "fullfilled";
let REJECT = "reject";
class MyPromise {
  constructor(excutor) {
    this.status = PENDING;
    this.value = null;
    this.resolveFnCallBack = [];
    this.rejectFnCallBack = [];
    this.resolve = (value) => {
      this.value = value;
      this.status = FULLFILLED;
      this.resolveFnCallBack.map((item) => item(value));
    };
    this.reject = (value) => {
      this.value = value;
      this.status = REJECT;
      this.rejectFnCallBack.map((item) => item(value));
    };
    excutor(this.resolve, this.reject);
  }
  then(resolveFn, rejectFn) {
    resolveFn = typeof resolveFn === "function" ? resolveFn : (v) => v;
    rejectFn =
      typeof rejectFn === "function"
        ? rejectFn
        : function (err) {
            throw err;
          };
    return new MyPromise((resolve, reject) => {
      switch (this.status) {
        case PENDING:
          this.resolveFnCallBack.push(() => {
            let value = resolveFn(this.value);
            if (promise === value)
              return reject(
                new Error(
                  "TypeError: Chaining cycle detected for promise #<Promise>"
                )
              ); // 解决情况一问题

            if (
              (typeof value === "object" && typeof value !== null) ||
              typeof value === "function"
            ) {
              let then = value.then;
              if (typeof then === "function") {
                then.call(
                  this,
                  (x) => {
                    // resolvePromise(promise, y, resolve, reject);
                    resolve(x);
                  },
                  (y) => {
                    reject(y);
                  }
                );
              } else {
                resolve(value);
              }
            } else {
              resolve(value);
            }
          });
          this.rejectFnCallBack.push(() => {
            rejectFn(this.value);
            reject(this.value);
          });
          break;
        case REJECT:
          rejectFn(this.value);
          reject(this.value);
          break;
        case FULLFILLED:
          resolveFn(this.value);
          resolve(this.value);

          break;
      }
    });
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
