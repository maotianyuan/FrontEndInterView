function Foo() {
  getName = function () {
    console.log(1);
  };
  return this;
}
Foo.getName = function () {
  console.log(2);
};
Foo.prototype.getName = function () {
  console.log(3);
};
var getName = function () {
  console.log(4);
};
function getName() {
  console.log(5);
}

Foo.getName();
getName();
Foo().getName();
getName();

new Foo.getName(); // new (foo.getName) () // 2
new Foo().getName(); // (new foo()).getName() // 3
new new Foo().getName(); // new ((new foo()).getName)()

// new和点运算符的优先级
// 优先级:  点20 > 无参 new19
// 优先级:  点20 = 带参 new 从左到右20
// 带参数: 不一定有参数，带括号就行 例如：new Foo()和new Foo(10)是一样的表达式，前者的参数为0个而已。
