// 编译： 函数赋值，变量不赋值
// 执行：变量赋值

var a = 1;
function fn(m) {
  console.log("fn");
}
function fn(m) {
  console.log("new_fn");
}
function a() {
  console.log("fn_a");
}
console.log(a);
fn(1);
var fn = "var_fn";
console.log(fn);

/////////////////////////豪华分割线/////////////////////////////////////

// 编译创建阶段：变量a = undefined; 函数 a = 已经赋值
function fn(m) {
  console.log("fn");
}
function fn(m) {
  console.log("new_fn");
}
function a() {
  console.log("fn_a");
}
var a = undefined;
var fn = undefined;

// 执行的时候: 变量 a = 1， 故 此时等于 a
a = 1;
console.log(a);
fn();
fn = "var_fn";
console.log(fn);
