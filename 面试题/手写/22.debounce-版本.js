// V1 - 函数执行
const debounce = (fn, delay = 1000) => {
  let timer = null;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.call(this, ...args);
      clearTimeout(timer);
      timer = null;
    }, delay);
  }
}

// v2 - 提供立即执行选项
const debounceV2 = (fn, delay = 1000, immediate = true) => {
  let timer = null;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }

    if (immediate) {
      if (!timer) {
        fn.call(this, ...args);
      }
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    } else {
      timer = setTimeout(() => {
        fn.call(this, ...args);
        clearTimeout(timer);
        timer = null;
      }, delay);
    }
  }
}
const debounceV3 = (fn, delay = 1000, immediate = true) => {
  let timer = null;
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }

    if (immediate && !timer) {
      fn.call(this, ...args); 
    }
    timer = setTimeout(() => {
      if (!immediate) {
        fn.call(this, ...args);
      }
      clearTimeout(timer);
      timer = null;
    }, delay);
  }
}


// 无定时器版

const debounceV4 = (fn, delay = 1000, immediate = true) => {
  let previous = 0;
  return function(...args){
    let now = Date.now();
    if (delay > now - previous) {
      fn.call(this, ...args);
    }
  }
}