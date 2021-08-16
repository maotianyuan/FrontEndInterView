//  Promise原理、方法，promise race all allsetted

class MyPromise {
  constructor(exector) {
    this.success = [];
    this.resolve = () => {
      this.success.map((fn) => fn());
    };
    exector(this.resolve);
  }
  then(fn) {
    this.success.push(fn);
  }
}

const task = new MyPromise((resolve) => {
  setTimeout(() => {
    resolve();
  });
});
task.then(() => {
  console.log(1);
});
task.then(() => {
  console.log(2);
});

// race
MyPromise.all = function (promisesList) {
  let arr = [];
  return new MyPromise((resolve, reject) => {
    if (!promisesList.length) resolve([]);
    // 直接循环同时执行传进来的promise
    for (const promise of promisesList) {
      promise.then((res) => {
        // 保存返回结果
        arr.push(res);
        if (arr.length === promisesList.length) {
          // 执行结束 返回结果集合
          resolve(arr);
        }
      }, reject);
    }
  });
};

// race
MyPromise.race = function (promisesList) {
  return new MyPromise((resolve, reject) => {
    // 直接循环同时执行传进来的promise
    for (const promise of promisesList) {
      // 直接返回出去了，所以只有一个，就看哪个快
      promise.then(resolve, reject);
    }
  });
};
