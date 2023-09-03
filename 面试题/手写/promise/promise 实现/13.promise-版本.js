// https://www.yuque.com/mty/here/urmeln#zk6uO

const PENDING = "pending";
const REJECTED = "rejected";
const FULFILLED = "fuilfilled";
class MyPromise {
  #state = PENDING;
  #result = undefined;
  #handler = [];
  constructor(execute) {
    const reject = (value) => {
      this.#changeState(REJECTED, value);
    };
    const resolve = (value) => {
      this.#changeState(FULFILLED, value);
    };
    execute(resolve, reject);
  }
  #changeState(state, result) {
    if (this.#state !== PENDING) {
      return;
    }
    this.#state = state;
    this.#result = result;
    this.#run();
  }
  #isPromiseLike(data) {
    if (
      value !== null &&
      (typeof data === "object" || typeof data === "function")
    ) {
      return typeof value.then === "function";
    }
    return false;
  }
  #runMicroTask(func) {
    if (typeof process === "object" && typeof process.nexTick === "function") {
      process.nextTick(func);
    } else if (typeof MutationObserver === "function") {
      const ob = new MutationObserver(func);
      const textNode = document.createTextNode("1");
      ob.observe(textNode, {
        chatacterData: true,
      });
      textNode.data = "2";
    } else {
      setTimeout(func);
    }
  }
  #runOne(callback, resolve, reject) {
    this.#runMicroTask(() => {
      if (typeof callback !== "function") {
        const settled = this.#state === FULFILLED ? resolve : reject;
        settled(this.#result);
        return;
      }
      try {
        const data = callback(this.#result);
        if (this.#isPromiseLike(data)) {
          data.then(resolve, reject);
        } else {
          resolve(data);
        }
      } catch (e) {
        reject(e);
      }
    });
  }
  #run() {
    if (this.#state === PENDING) {
      return;
    }
    while (this.#handler.length) {
      const { onFuilfilled, onRejected, resolve, reject } =
        this.#handler.shift();
      if (this.#state === FULFILLED) {
        if (typeof onFuilfilled === "function") {
          this.#runOne(onFuilfilled, resolve, reject);
        }
      } else if (this.#state === REJECTED) {
        if (typeof onRejected === "function") {
          this.#runOne(onRejected, resolve, reject);
        }
      }
    }
  }
  then(onFuilfilled, onRejected) {
    return new MyPromise((resovel, reject) => {
      this.#handler.push({
        onFuilfilled,
        onRejected,
        resovel,
        reject,
      });
      this.#run();
    });
  }
}

const my = new MyPromise((resolve) => {
  setTimeout(() => {
    resolve("1");
  }, 100);
});
my.then((v) => {
  console.log("end", v);
  v = v + 1;
  return v;
});
my.then((v) => {
  console.log("end1", v);
});
