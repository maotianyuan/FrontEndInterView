//////////////////////////////// koa - compose

let middleware = [];
// compose 功能函数使得输出为 1, 2 ,3, 3.1, 2.1, 1.1
middleware.push(async (next) => {
  console.log(1);
  next();
  console.log(1.1);
});
middleware.push((next) => {
  console.log(2);
  next();
  console.log(2.1);
});
middleware.push((next) => {
  console.log(3);
  next();
  console.log(3.1);
});

// 迭代将数组执行嵌套执行
const compose = (data) => {
};
compose(middleware);

//////////////////////////////// reduce - compose

function fn1(a, b) {
  return a + b;
}
function fn2(value) {
  return value * 100;
}
function fn3(value) {
  return value + 1000;
}

const data = fn3(fn2(fn1(1, 2)));

const myCompose = (data) => {
  // fn3、fn2                             => (...args) => fn3(fn2(...args))
  // (...args) => fn3(fn2(...args))、fn1  => (...args) => fn3(fn2(fn1(...args)))
};

// fn3(fn2())
// fn3(fn2(fn1()))

const myComposeRresult = myCompose(fn3, fn2, fn1)(1, 2);
console.log(myComposeRresult);
