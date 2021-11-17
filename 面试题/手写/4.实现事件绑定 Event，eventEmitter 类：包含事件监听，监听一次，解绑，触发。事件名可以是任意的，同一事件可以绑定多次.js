// 实现事件绑定 Event，eventEmitter 类：包含事件监听，监听一次，解绑，触发。事件名可以是任意的，同一事件可以绑定多次

class MyEvent {
  constructor() {
    this.listener = {};
  }

  on(name, fn) {
    const fns = this.listener[name] || [];
    const result = [...fns, fn];
    this.listener[name] = result;
  }

  trigger(name) {
    const event = this.listener[name];
    if (!event) return;
    event.forEach((callback) => callback());
  }
  once(name, fn) {
    const _fn = () => {
      fn();
      this.off(name, fn);
    };
    this.on(name, _fn);
  }

  off(name, fn) {
    if (!fn) {
      this.listener[name] = [];
      return;
    }

    const fns = this.listener[name];
    if (!fns) return;

    const index = fns.findIndex((item) => item === fn);
    fns.splice(index, 1);
    this.listener[name] = fns;
  }
}

const mtyEvent = new MyEvent();
const star1 = () => {
  console.log("start-1");
};
const star2 = () => {
  console.log("start-2");
};

mtyEvent.on("start", star1);
mtyEvent.on("start", star2);

mtyEvent.on("stop", () => {
  console.log("stop");
});
// mtyEvent.trigger("start");
// mtyEvent.off("start", star1);

mtyEvent.once("once", () => {
  console.log("mty");
});

mtyEvent.trigger("once");
console.log(mtyEvent);
