// 判断大小写 并把大写转小写 小写转大写

const str = 'AdEhgGa';

// charCodeAt
const formatterData = (str) => {
  if (!str) return '';
  let arr = str.split('');
  let target = '';
  arr.forEach(item => {
    target += item.charCodeAt() < 97 ? item.toLowerCase() : item.toUpperCase();
  })
  return target;
}
// console.log(formatterData(str));

// 比对
const formatterDataV2 = (str) => {
  if (!str) return '';
  let arr = str.split('');
  const target = arr.map(item => {
    return item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase();
  })
  return target.join('');
}

// console.log(formatterDataV2(str));

// 正则
const formatterDataV3 = (str) => {
  if (!str) return '';
  return str.replace(/[a-zA-Z]/g, (item) => {
    return item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase();
  })
}
console.log(formatterDataV3(str));