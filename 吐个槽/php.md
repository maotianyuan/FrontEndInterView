```js
// 变量后头加一个空格，让我深刻怀疑自己整个世界
let arr = this.transferAllXiaoqu.filter(item => item.daqu_id === '1')//  这段话怎么会有错
let arr = this.transferAllXiaoqu.filter(item => item.daqu_id + '' === regin + '')//  这段话怎么会有错
 // 最后 item 后面 daqu_id 多了一个空格  "daqu_id " !== "daqu_id"
```