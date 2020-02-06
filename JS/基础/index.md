# JS

## 原型 / 构造函数 / 实例
```javascript
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
```
![image.png](https://cdn.nlark.com/yuque/0/2020/png/424608/1580968112566-c5de2466-e790-44d8-8962-3255ca74e2c0.png#align=left&display=inline&height=380&name=image.png&originHeight=760&originWidth=1366&size=342865&status=done&style=none&width=683)

## 原型链
**原型链是由原型对象组成**，每个对象都有 `__proto__` 属性，指向了创建该对象的构造函数的原型，`__proto__` 将对象连接起来组成了原型链。是一个用来 **实现继承和共享属性 **的有限的对象链。

## this
**永远指向 最后调用 它的那个对象**
**匿名函数的 this 永远指向 window**
```javascript
 var name = "windowsName";
    var a = {
        // name: "Cherry",
        fn : function () {
            console.log(this.name);      // undefined
        }
    }
    window.a.fn(); //突出【最后】
```

```javascript
var name = "windowsName";
    var a = {
        name : null,
        // name: "Cherry",
        fn : function () {
            console.log(this.name);      // windowsName
        }
    }

    var f = a.fn;
    f();   // 突出 【调用】
```

```javascript
var name = "windowsName";

    function fn() {
        var name = 'Cherry';
        innerFunction();
        function innerFunction() {
            console.log(this.name);      // windowsName
        }
    }

    fn() //突出 【最后和调用】
```

## 作用域、作用域链

- 【1】没用 var 定义的变量为全局变量(严格模式不支持)
- 【2】function 函数内部定义的变量称之为局部变量，除此之外都是全局变量

> 外内部存在同名变量，需要先判断内部有没有重新新定义这个变量，


- 【1】若重新定义，那就用新定义的
- 【2】否则用外部作用域的变量；
- 【作用域链】先在本局域块中找，该变量是否定义以及赋值，若没有则往父级作用域去寻找，当到全局中还未找到，则报错;
## 
## 内存泄漏

- 意外的**全局变量**: 无法被回收
- **定时器**: 未被正确关闭，导致所引用的外部变量无法被释放
- **事件监听**: 没有正确销毁 (低版本浏览器可能出现)
- **闭包**: 会导致父级中的变量无法被释放
- **dom 引用**: dom 元素被删除时，内存中的引用未被正确清空

## [闭包](https://www.yuque.com/reliamm/rote/hqy98t)

## [继承](https://www.yuque.com/reliamm/rote/dgcp00)
## 常用的js数组 字符串操作 map/forEach/filter/some/every/join/sort/ slice/splice/indexOf/reduce 区别和应用场景

- `map`: 遍历数组，返回回调返回值组成的新数组

- `forEach`: 无法`break`，可以用`try/catch`中`throw new Error`来停止

- `filter`: 过滤

- `some`: 有一项返回`true`，则整体为`true`

- `every`: 有一项返回`false`，则整体为`false`

- `join`: 通过指定连接符生成字符串

- `push / pop`: 末尾推入和弹出，**改变原数组**， 返回推入/弹出项

- `unshift / shift`: 头部推入和弹出，**改变原数组**，返回操作项

- `sort(fn) / reverse`: 排序与反转，**改变原数组**

- `concat`: 连接数组，不影响原数组， 浅拷贝

- `slice(start, end)`: 返回截断后的新数组，**不改变原数组**

- `splice(start, number, value...)`: 返回删除元素组成的数组，value 为插入项，**改变原数组**

- `indexOf / lastIndexOf(value, fromIndex)`: 查找数组项，返回对应的下标

- `reduce / reduceRight(fn(prev, cur)， defaultPrev)`: 两两执行，prev 为上次化简函数的`return`值，cur 为当前值(从第二项开始)


## window 的 onload 事件和 DOMContentLoaded 谁先谁后？
DOMContentLoaded 文档加载完成触发的事件，即dom加载完成，不用考虑其他资源
window.onload 当页面载入完毕后执行Javascript代码

## 跨域

## 实现一个 call、apply、bind

```javascript
Function.prototype._call = function (context = window, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  const key = Symbol()
  context[key] = this
  const result = context[key](...args)
  delete context[key]
  return result
}
```

```javascript
function isArray(target) {
  return '[object Array]' === Object.prototype.toString.call(target);
}

Function.prototype._apply = function (context = window, args) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  const key = Symbol()
  if (!isArray(args)){
    throw new TypeError('Error')
    return false
  }
  context[key] = this
  const result = context[key](...args)
  delete context[key]
  return result
}
```

```javascript
Function.prototype._bind = function (context = window, ...args) {
  if (!isArray(args)){
    throw new TypeError('Error')
    return false
  }
  const _this = this
  return function F() {
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}
https://juejin.im/post/5e24590ef265da3e152d27bc#heading-0
https://juejin.im/post/59093b1fa0bb9f006517b906
```

## new 运算符的执行过程

```javascript

function myNew (context, ...args) {
  var obj = {};
  obj.__proto__ = context.prototype
  // var obj = Object.create(context.prototype)
  const result = context.call(obj, ...args)
  return result instanceof Object ? result : obj;
}
```

## instanceof 原理

```javascript
function _instanceof (left, right) {
  let leftValue = left.__proto__
  let rightValue = right.prototype
  while(true) {
    if (leftValue === null) {
      return false
    }
    if (leftValue === rightValue) {
      return true
    }
    leftValue = leftValue.__proto__
  }
}
```

## 深 copy

```javascript
function find(list, f) {
    return list.filter(f)[0]
}

function deepCopy(obj, cache = []) {
    // just return if obj is immutable value
    if (obj === null || typeof obj !== 'object') {
        return obj
    }

    // if obj is hit, it is in circular structure
    const hit = find(cache, c => c.original === obj)
    if (hit) {
        return hit.copy
    }

    const copy = Array.isArray(obj) ? [] : {}
    // put the copy into cache at first
    // because we want to refer it in recursive deepCopy
    cache.push({
        original: obj,
        copy
    })
    Object.keys(obj).forEach(key => copy[key] = deepCopy(obj[key], cache))

    return copy
}
```

## 防抖与节流

```javascript
let $eleThrottle = document.getElementById('throttle')
let $eleDebounce = document.getElementById('debounce')
const handlerBtn = function(event, type) {
  console.log(this, event, type)
}
window.onload = function() {
  //节流
  const btnThrottle = throttle(handlerBtn, 1000)
  $eleThrottle.addEventListener('click', function(event){
    btnThrottle(event, 1000)
  })
  // 防抖
  const btnDebounce = debounce(handlerBtn, 1000)
  $eleDebounce.addEventListener('click', function(event){
    btnDebounce(event)
  })
}
const throttle = function(func, delay){
  let timer = null
  return (...args) => {
    if (timer) { return }
    timer = setTimeout(() => {
      func.call(this, args, 'debounce')
      timer = null
    }, delay)
  }
}
const debounce = function(func, delay){
  let timer = null
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.call(this, args, 'debounce')
    }, delay)
  }
}
```

## [去重](https://www.yuque.com/reliamm/rote/rhegig)

## 实现数组 扁平化flatten

```javascript
const flatten = (arr) => arr.toString().split(',').map(item => +item)

const flatten = (arr, deep = 1) => {
  return arr.reduce((acc, cur) => {
    return Array.isArray(cur) && deep > 1 ? 
      [...acc, ...flatten(cur, deep - 1)] :
      [...acc, cur]
  }, [])
}
```

## 函数柯里化

```javascript
// 原理是利用闭包把传入参数保存起来，当传入参数的数量足够执行函数时，就开始执行函数
function isType (type) {
  return function (target) {
    return `[object ${type}]` === Object.prototype.toString.call(target)
  }
}

const isType = type => target => `[object ${type}]` === Object.prototype.toString.call(target)
```

## 说说 script 标签中的 defer 和 async 异同点？

```javascript
- defer 代码语法高亮
在script元素中设置defer属性，相当于告诉浏览器立即下载，但延迟执行。不会阻止文档的渲染
在现实当中，延迟脚本并不一定会按照顺序执行，也不一定会在 DOMContentLoad 时间触发前执行，因此最好只包含一个延迟脚本。

- async 百度统计 
会阻止文档渲染，第二个脚本文件可能会在第一个脚本文件之前执行, 因此确保两者之间**互不依赖**非常重要, 指定async属性的目的是不让页面等待两个脚本下载和执行，从而异步加载页面其他内容。

async 和 defer 虽然都是异步的，不过还有一些差异，使用 async 标志的脚本文件一旦加载完成，会立即执行；而使用了 defer 标记的脚本文件，需要在 DOMContentLoaded 事件之前执行。
```

![image.png](https://cdn.nlark.com/yuque/0/2020/png/424608/1580961778689-c6d6bee9-401d-4c2c-b859-4e21bd69b870.png#align=left&display=inline&height=411&name=image.png&originHeight=822&originWidth=826&size=106165&status=done&style=none&width=413)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/424608/1580961732235-6cfdb5f6-9106-45c1-81a3-4fb4d03f3c12.png#align=left&display=inline&height=649&name=image.png&originHeight=1298&originWidth=1316&size=257753&status=done&style=none&width=658)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/424608/1580961743904-dee7cacc-30cf-4242-932d-d17686e2a616.png#align=left&display=inline&height=421&name=image.png&originHeight=842&originWidth=1312&size=134146&status=done&style=none&width=656)
[defer async](https://cloud.tencent.com/developer/article/1093912)
## 
## 事件委托

```javascript
// Get the element, add a click listener...
document.getElementById("parent-list").addEventListener("click", function(e) {
	// e.target is the clicked element!
	// If it was a list item
	if(e.target && e.target.nodeName == "LI") {
		// List item found!  Output the ID!
		console.log("List item ", e.target.id.replace("post-", ""), " was clicked!");
	}
});
```
## 
## 事件冒泡
当一个事件在 DOM 元素上触发时，如果有事件监听器，它将尝试处理该事件，然后事件冒泡到其父级元素，并发生同样的事情。最后直到事件到达祖先元素。事件冒泡是实现事件委托的原理（event delegation）。

## 事件流
事件流分为两种 **捕获事件** **冒泡事件**
捕获事件流从**根**节点开始执行，一直往**子**节点查找执行，直到查找执行到目标节点
冒泡事件流从**目标节点**开始执行，一直往**父**节点冒泡查找执行，直到查到到根节点。

## ["1", "2", "3"].map(parseInt)

```javascript
// parseInt() 函数解析一个字符串参数，并返回一个指定基数的整数 (数学系统的基础)。
// const intValue = parseInt(string[, radix]);

var array = arr.map(item => item)
var array = arr.map(funs)

var myParseInt = (string, radix) =>{
  return parseInt(string,radix)
}
var arr = [1, 2, 3]
var array = arr.map(myParseInt)
console.log(array) // [1, NaN, NaN]
```

- 或者也可以这样理解
```javascript
['1', '2', '3'].map((item, index) => {
	return parseInt(item, index)
})
```

## 数据类型
原始类型
对象（Object）类型
对象类型和原始类型不同的是，原始类型存储的是**值**，对象类型存储的是地址（**指针**）。当你创建了一个对象类型的时候，计算机会在**内存**中帮我们开辟一个空间来**存放值**，但是我们需要找到这个空间，这个空间会拥有一个地址（指针）。

## 原始类型有哪几种？null 是对象？

- `boolean`
- `null`
- `undefined`
- `number`
- `string`
- `symbol`

> 原始类型存储的都是值，是没有函数可以调用的
> 疑问：明明 '1'.toString() 是可以使用的。其实在这种情况下，'1' 已经不是原始类型了，而是被强制转换成了 String 类型也就是对象类型，所以可以调用 toString 函数。

## 
null 虽然 typeof null 会输出 object, 但实际他是js最开始的一个 Bug, 在 JS 的最初版本中使用的是 32 位系统，为了**性能考虑**使用**低位存储变量**的类型信息，000 开头代表是对象，然而 null 表示为全零，所以将它错误的判断为 object 。虽然现在的内部类型判断代码已经改变了，但是对于这个 Bug 却是一直流传下来。

## 0.1 + 0.2 != 0.3
JavaScript 中所有数字包括整数和小数都只有一种类型 — `Number`
这样的存储结构优点是可以归一化处理整数和小数，节省存储空间,使用 64 位固定长度来表示，
[0.1+0.2 != 0.3](https://zhuanlan.zhihu.com/p/30703042)

## trim 实现
```javascript
function myTrim(str) {
  let reg = /^\s+|\s+$/g;
  return str.replace(reg, "");
}
console.log(myTrim('    asdf    '));
```
**
