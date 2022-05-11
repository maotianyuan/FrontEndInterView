var dog = {
  name: "dog name",
  getDog: function () {
    console.log("getDog", this.name, [...arguments]);
  },
};

var cat = {
  name: "cat name",
  getCat: function () {
    console.log("getCat", this.name, [...arguments]);
  },
};

cat.getCat.bind(this)();

cat.getCat.bind(dog, 10)(1, 3, 4);

dog.getDog.bind(cat)([4, 5, 6], 7);

var factory = dog.getDog.bind(cat, 1);
var fac = new factory();

fac.name = "fac name";

console.log(fac);

Function.prototype.myBind = function (context) {
  // context 是对象
  let _this = this; // 函数方法
  let outArgs = Array.prototype.slice.call(...arguments, 1);
  function fn () {
    let innerArgs = Array.prototype.slice.call(arguments);
    return _this.call(this instanceof fn ? this : context,  ...outArgs, ...innerArgs)
  }
  fn.prototype = Object.create(this.prototype);
  return fn;
};

function _create(prototype) {
  function fn () {}
  fn.prototype = prototype;
  return new fn();
}
