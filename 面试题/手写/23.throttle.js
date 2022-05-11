// 第一版
const throttleV1 = (fn, wait = 1000) => {
  let timer = null;
  return function() {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn();
      clearTimeout(timer);
      timer = null;
    }, wait)
  }
}

// 第二版
const throttleV2 = (fn, wait = 1000) => {
  let timer = null;
  return function(...args) {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn.call(this, ...args);
      clearTimeout(timer);
      timer = null;
    }, wait)
  }
}

// 首次执行
const throttleV3 = (fn, wait = 1000, { leading = true }) => {
  let timer = null;
  return function(...args) {
    if (timer) {
      return;
    }
    if (leading && !timer) {
      fn.call(this, ...args);
    }
    
    timer = setTimeout(() => {
      if(!leading) {
        fn.call(this, ...args);
      }
      clearTimeout(timer);
      timer = null;
    }, wait)
  }
}

