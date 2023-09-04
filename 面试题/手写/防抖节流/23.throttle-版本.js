// 思想
// 第一次点击创建新的定时器，后面存在定时器，则不执行，当一个定时器执行完了之后，把timer 销毁

// 无定时器版 V1, 默认首次执行，尾巴不执行
const throttleV2_1 = (fn, wait = 1000) => {
  let previous = 0;
  return function (...args) {
    let now = Date.now();
    // let remaining = wait - (now - previous);
    // 等待时间 remaining < 0 就立即执行
    // 上次执行时间 previous = 0
    // 本次执行时间 now - 上次执行时间 previous > 间隔时间 wait
    if (wait < now - previous) {
      fn.call(this, ...args);
      previous = Date.now();
    }
  };
};

// 首次执行可控制、尾巴不控制
const throttleV2_2 = (fn, wait = 1000, { leading = true }) => {
  let previous = 0;
  return function (...args) {
    let now = Date.now();
    // 首次执行不执行控制语句，首次不执行关键点在于
    // previous = 0 的时候转化成 previous = now, 是的 remaining > 0 不执行首次;
    if (!previous && leading === false) {
      previous = now;
    }

    let remaining = wait - (now - previous);
    if (remaining < 0) {
      fn.call(this, ...args);
      previous = now;
    }
  };
};

// 首次执行可控，尾巴执行可控
const throttleV2_3 = (fn, wait = 1000, { leading = true, trailing = true }) => {
  let previous = 0;
  let timer = null;
  return function (...args) {
    let now = Date.now();
    if (!previous && leading === false) {
      previous = now;
    }
    let remaining = wait - (now - previous);
    if (remaining < 0) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      fn.call(this, ...args);
      previous = now;
    } else if (!timer && trailing) {
      timer = setTimeout(() => {
        fn.call(this, ...args);
        // 首次不执行，就把 previous = 0, 在上面条件中会设置为 now
        previous = leading === false ? 0 : Date.now();
        clearTimeout(timer);
        timer = null;
      }, remaining);
    }
  };
};
