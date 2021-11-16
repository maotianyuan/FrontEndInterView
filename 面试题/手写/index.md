- promise.all 处理并发，200 个请求每次请求 5 个，请求次数限制，n 多请求，每次只能触发 3 次
- 实现 Promise.allSettled 方法
- 实现事件绑定 Event，eventEmitter 类：包含事件监听，监听一次，解绑，触发。事件名可以是任意的，同一事件可以绑定多次
- 实现一个 Map ，实现 Map 的创建、插入、读取、遍历
- 实现一个 flat
- 写一下响应式处理的核心逻辑（Object.defineProperty 那段）
- generator next 遍历
- 判断两个数组是否是子集关系
- 实现过滤 throttle ,但是需要考虑边界条件，第一次不能触发？根据面试官的要求写
- (5.2 - 2.82 _ 43.11) / (25.01 _ 54.11 + 55.2223) \* 2.34566 怎么算出精确的数

- 判断大小写 并把大写转小写 小写转大写
- 手写字符串连接符-变驼峰
- 算法实现 compose 功能函数使得输出为 1, 2 ,3, 3.1, 2.1, 1.1
- 1-5 的随机数 Math.floor( Math.random()\*4 ) + 1 => 1-7 的随机数

- 写一个方法生成随机的色值字符串 #c1c1c1？如果说是通过 rgb(255, 255, 255) 生成 #ffffff？十进制转 16 进制或者二进制？
- 位运算
- 文件上传，n 多文件上传，控制在 100m 内，实现文件数量最大，可以参考算法兑换零钱
- 括号关闭
- 最大 k 值的方法，用堆实现的，以及算法度

```js
// arr 数组
// n 项
// 和等于 sum
function fn(arr, n, sum)
```

- 把 `input` 转换成 `output` 格式对象

```javascript
var input = {
  'a.b.c.dd': 'abcdd',
  'a.d.xx': 'adxx'
}

var output = {
 a: {
     b: {
         c: {
             dd: 'abcdd'
            }
        }
        d: {
            xx: 'adxx'
        }
    }
}
```

/['_', 'a', '_', ‘c', 'b', '_', '_’],不改变数组的情况下得出以下信息
//['a', ‘c', ‘b', '_', '_', '_', '_’]

- https://bitable.feishu.cn/app8Ok6k9qafpMkgyRbfgxeEnet?from=logout&table=tblzZHf2Ix3YtxPM&view=vew9iquA45

```js
function add(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(a + b);
    }, 0);
  });
}
const getSum = async (...args) => {
  let temp = 0;
  for (var i = 0; i < args.length; i += 2) {
    const result = await add(args[i], args[i + 1]);
    temp += result;
  }
  return temp;
};
console.log(await getSum(4, 5, 7, 9), "target");
```

```js
// 手写个方法，过滤掉 location.search 中的 `c=1`，`https://a.com/?b=0&c=1#/def?g=2&c=1&h=3#ijk_c=1`
```

```js
// [1,2,3,6,7,3,'2','3','3'] 出现次数最多的项 出现了几次
```

- 写一个正则表达式，校验 aabb...
- 安全取值之类的
- 封装 localstorage

```js
const fetch = () => {
  return new Promise((reslove) => {
    setTimeout(() => {
      reslove();
    }, 1000);
  });
};

function maxLimiteRequest(max = 5) {
  let currentSize = 0;
  let queue = [];
  const carryTask = () => {
    if (!queue.length) return;
    const [url, reslove] = queue.shift();
    fetch(url)
      .then((res) => {
        console.log(url);

        reslove(url);
      })
      .finally(() => {
        if (!queue.length) {
          currentSize--;
        }
        console.log("结束", currentSize);
        carryTask();
      });
  };
  return function (url) {
    return new Promise((reslove) => {
      let task = [url, reslove];
      queue.push(task);
      if (currentSize < max) {
        currentSize++;
        carryTask();
      }
    });
  };
}

let request1 = maxLimiteRequest();
for (let i = 0; i < 10; i++) {
  request1(i).then((res) => {});
}
```
