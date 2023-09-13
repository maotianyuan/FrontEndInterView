# eval
小心使用它，而不是不使用它, 需要两步骤解析在执行，解析耗性能

# 功能
对应字符串, 解析并执行

# 不安全
- eval 内的字符串，很有可能出现类似 xss 攻击的问题，它的不安全主要是字符串内容，由用户设置的数据，存储后，并对其他用户产生了影响

# 性能
eval() 解析时慢，在执行
V8 把 js 语音解释称机器码，任何一个变量名都会被删除，eval 会强制浏览器查找所有的变量名，来确认这个变量是否在机器代码中存在，存在设置新值
如果存在设置了新值，会强制浏览器重新执行已经生成的机器码，进行补偿

# 例子
```js
const data = eval('require')(`./emails/${recipient}/${type}.json`)
```

```js
var strDoubleFunction = "function doubleFunction(parameter) { return parameter* parameter; }";  
eval(strDoubleFunction);  
console.log(doubleFunction(5)); // 25  
console.log(doubleFunction(4)); // 16  
```

```js
function looseJsonParse(obj) {
  return eval("(" + obj + ")");
}
console.log(looseJsonParse("{a:(4-1), b:function(){}, c:new Date()}"));

function looseJsonParse(obj) {
  return Function('"use strict";return (' + obj + ")")();
}
console.log(looseJsonParse("{a:(4-1), b:function(){}, c:new Date()}"));
```