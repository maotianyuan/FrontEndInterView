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