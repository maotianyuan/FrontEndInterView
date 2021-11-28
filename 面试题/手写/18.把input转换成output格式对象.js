// 把 `input` 转换成 `output` 格式对象

var input = {
  'a.b.c.dd': 'abcdd',
  'a.d.xx': 'adxx'
}

// var output = {
//  a: {
//      b: {
//          c: {
//              dd: 'abcdd'
//             }
//         }
//         d: {
//             xx: 'adxx'
//         }
//     }
// }
// ```

const formatterData = (data) => {
  let target = {};
  Object.keys(data).map(key => {
    const value = data[key];
    const arr = key.split('.')
    let tmp = {};
    arr.map((item, index) => {
      if(index === 0) {
        target[item] = target[item] || {}
        tmp = target[item]
        return;
      };
      if (!tmp[item]) tmp[item] = arr.length - 1 === index ? value : {}
      tmp = tmp[item];
    })

  })
  return target;
}

const result = formatterData(input)
console.log(result);

