### 目录 

* [x] 一、this指向
* [x] 二、怎么改变this指向
* [x] 三、JS 中的函数调用
* [ ] 四、手写 call、apply 及 bind 函数
* [x] 五、作用域

#### 一、this指向
>this **永远指向最后调用它的那个对象**

```js
 var name = "windowsName";
    var a = {
        // name: "Cherry",
        fn : function () {
            console.log(this.name);      // undefined
        }
    }
    window.a.fn(); //突出【最后】

```

```js
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
```js
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
---
#### 二、怎么改变this指向
>使用 ES6 的箭头函数
>在函数内部使用 _this = this
>使用 apply、call、bind
>new 实例化一个对象

```js
var a = {
        name : "Cherry",

        func1: function () {
            console.log(this.name)
        },

        func2: function () {
            setTimeout(  function () {
                this.func1()
            }.apply(a),100);
        }

    };

    a.func2() 
```
```js
 var a = {
        name : "Cherry",

        func1: function () {
            console.log(this.name)
        },

        func2: function () {
            setTimeout(  function () {
                this.func1()
            }.call(a),100);
        }

    };

    a.func2() 
```

```js
 var a = {
        name : "Cherry",

        func1: function () {
            console.log(this.name)
        },

        func2: function () {
            setTimeout(  function () {
                this.func1()
            }.bind(a)(),100);
        }

    };
```
```js
var a = {
  name: "a",
  fn1: function () {
    console.log(this.name)
  }
}
var b = {
  name: "b",
  fn1: function () {
    console.log(this.name)
  }
}
b.fn1.call(a) // a
a.fn1.call(b) // b
a.fn1.bind(b)() // b

```
- apply、call、bind区别
> apply() 方法调用一个函数, 其具有一个指定的this值，以及作为一个数组（或类似数组的对象）提供的参数 fun.apply(thisArg, [argsArray])

>thisArg：在 fun 函数运行时指定的 this 值。需要注意的是，指定的 this 值并不一定是该函数执行时真正的 this 值，如果这个函数处于非严格模式下，则指定为 **null** 或 **undefined** 时会自动指向全局对象（浏览器中就是**window**对象），同时值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的**自动包装对象**。


>所以 apply 和 call 的区别是 call 方法接受的是若干个参数列表，而 apply 接收的是一个包含多个参数的数组

>bind()方法创建一个新的函数, 当**被调用时**，将其this关键字设置为提供的值，在调用新函数时，在任何提供之前提供一个给定的参数序列。


>
```
 b.apply(a,[1,2])     // 3
 b.call(a,1,2)     
```
---

#### 三、JS 中的函数调用
- 1:作为一个函数调用
- 2:函数作为方法调用
- 3:使用构造函数调用函数
- 4:作为函数方法调用函数（call、apply）
>**匿名函数的 this 永远指向 window**

- 3使用构造函数调用函数
>如果函数调用前使用了 **new **关键字, 则是调用了**构造函数**。
这看起来就像创建了新的函数，但实际上 JavaScript 函数是重新创建的对象：

new 过程
```js
var a = new myFunction("Li","Cherry");

new myFunction{
    var obj = {};
    obj.__proto__ = myFunction.prototype;
    var result = myFunction.call(obj,"Li","Cherry");
    return typeof result === 'obj'? result : obj;
}
1:创建一个空对象 obj;
2:将新创建的空对象的隐式原型指向其构造函数的显示原型。
3:使用 call 改变 this 的指向
4:如果无返回值或者返回一个非对象值，则将 obj 返回作为新对象；如果返回值是一个新对象的话那么直接直接返回该对象。

```

#### 四、手写 call、apply 及 bind 函数
>不传入第一个参数，那么上下文默认为 window
改变了 this 指向，让新的对象可以执行该函数，并能接受参数

```js
Function.prototype.myCall = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  context = context || window
  context.fn = this
  const args = [...arguments].slice(1)
  const result = context.fn(...args)
  delete context.fn
  return result
}
```

```js
Function.prototype.myApply = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  context = context || window
  context.fn = this
  let result
  // 处理参数和 call 有区别
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }
  delete context.fn
  return result
}
```

```js
Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  const _this = this
  const args = [...arguments].slice(1)
  // 返回一个函数
  return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}
```
>[this\apply\call\bind](https://juejin.im/post/59bfe84351882531b730bac2#heading-0)

#### 五、作用域

>  总结:
- 【1】:没用var定义的变量为全局变量(严格模式不支持)
- 【2】:function函数内部定义的变量称之为局部变量，除此之外都是全局变量
> 外内部存在同名变量，需要先判断内部有没有重新新定义这个变量，
- 【1】:若重新定义，那就用新定义的
- 【2】:否则用外部作用域的变量；
- 【作用域链】：先在本局域块中找，该变量是否定义以及赋值，若没有则往父级作用域去寻找，当到全局中还未找到，则报错;
