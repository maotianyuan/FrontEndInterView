// 写一个方法生成随机的色值字符串 #c1c1c1？如果说是通过 rgb(255, 255, 255) 生成 #ffffff？十进制转 16 进制或者二进制？


// 出版
// const color = (number) => {
//   const str = `${number}`;
//   if (str.length === 2) return parseInt(str, 16);
//   return parseInt(`${str}${str}`, 16);
// }
// const trasferColor =  (str) => {
//   if (!str) return '';
//   const target = str.replace(/#/, '');
//   const len = target.length;
//   if (len != 6 && len != 3) {
//     console.log('不符合规范')
//     return;
//   } 
//   const step =  len === 6 ? 2 : 1;
//   const result = [];
//   for (let i = 0; i < len; i+=step) {
//     let value = target.slice(i, i + step);
//     console.log(value);
//     result.push(color(value));
//   }
//   return result;
// }
// console.log(trasferColor('#fff'));

// 优化

// 0x 16进制
// 0b 二进制
// 0o 八进制

const color = (value, hex) => {
  const str = `${value}`.padStart(2, `${value}`)
  // 将16进制的数字, 通过 parseInt 先转化为10进制, 在通过 toString 转化为 指定进制
  return parseInt(`0x${str}`, 16).toString(hex);
}
const transferColor =  (str, hex = 10) => {
  if (!str) return '';
  const target = str.replace(/#/, '');
  const len = target.length;

  if (![6, 3].includes(len)) {
    console.log('不符合规范')
    return;
  } 
  const step = len === 6 ? 2 : 1;
  let result = [];
  for (let i = 0; i < len; i += step) {
    let value = target.slice(i, i + step);
    result.push(color(value, hex));
  }
  return result;
}

console.log(transferColor('#fcc'));
console.log(transferColor('#fcc', 2));


// <!-- - 实现 36 进制的加法，0-9 加 a-z 不得直接使用 parseInt 转换十进制进行计算，如 '1b' + '0a' = 57 -->