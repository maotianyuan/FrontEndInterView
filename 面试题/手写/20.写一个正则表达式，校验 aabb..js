// 写一个正则表达式，校验 aabb..

const formatterData = (str) => {
  const arr = str.split('');
  let tag = true;
  for(let i = 0; i < arr.length; i+=2) {
    if (arr[i] !== arr[i+1]) {
      tag = false;
      break;
    }
  }
  return tag;
}

console.log(formatterData('aaccbb'));