// 16.括号关闭

const formatMaps = {
  '{': "}",
  '[': "]",
  '(': ")",
};

const formatLeft = ['{','[', '('];
const formatRight = ['}', ']', ')'];

// 1
const formatter = (str) => {
  if (!str) return ;
  const arr = str.split('');
  let temp = [];
  let tag = true;

  for (let i = 0 ; i < arr.length; i++) {
    let target = arr[i];
    if (formatLeft.includes(target) || formatRight.includes(target) ) {
      if (formatLeft.includes(target)) {
        temp.push(target);
      } else {
        const end = temp.slice(-1);
        if (formatMaps[end] === target) {
          temp.pop();
        } else {
          tag = false;
          break;
        }
      }
    }
  }
  return tag && temp.length <= 0;
}

// let str = '([}])'
// const result = formatter(str);
// console.log(result);

// 二版
const formulaMatch = (str) => {
  if (!str) return ;
  let temp = [];
  let tag = true;
  for (let i = 0 ; i < str.length; i++) {
    let target = str.charAt(i);
    if (/[\{\[\(\)\]\}]/g.test(target)) {
      if(Object.keys(formatMaps).includes(target)) {
        temp.push(target);
      } else {
        const end = temp.slice(-1);
        if (formatMaps[end] === target) {
          temp.pop();
        } else {
          tag = false;
          break;
        }
      }
    }
  }
  return tag && temp.length <= 0;
}
let str = '(aba(ds)f+12)'
const result = formulaMatch(str);
console.log(result);