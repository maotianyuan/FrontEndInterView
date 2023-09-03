




// 思想
// 每次点击都创建新的定时器，并把上一个销毁，有定时器 timer 存在则不执行函数
// 不点击的时候，定时器不在创建，最后一个定时器会把 定时器 timer 重置 null，




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