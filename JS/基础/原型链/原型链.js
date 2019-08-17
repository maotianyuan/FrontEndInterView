// 创建对象的4种方式
var o1 = {name: 'o1'}
var o2 = new Object({name: '02'})
function O3(){
  this.name = 'o3'
}
var o3 = new O3()
var P = {name: 'o4'}
var o4 = Object.create(P)
o4.__propto__ = P

// 实例有 o1 o2 o3 o4
// 构造函数有 O3 【任何一个函数只要被new使用了，就可称之为构造函数】
// 原型对象  O3.prototype
// 实例属性 o1.__proto__ o2.__proto__ o3.__proto__ o4.__proto__
// 实例 === 构造函数 
console.log(o3.__proto__.constructor === O3)

// 构造函数 === 原型对象
console.log(O3.prototype.constructor === O3)

// 实例 === 原型对象
console.log(o3.__proto__ === O3.prototype)

// 只有实例对象才有__proto__ 构造函数也有__proto__
// 只有构造函数有prototype属性
