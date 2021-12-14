// 3.把一个非零数组中的零都移动数组的后边，要求不能使用新数组，原来数组非零位置不能移动.js

const getMoveData = (arr) => {
  let len = arr.length;
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    const v = arr[i];
    if (j > len) {
      break;
    }
    j++;
    if (v === 0) {
      const [v] = arr.splice(i, 1);
      arr.push(v);
      i--;
    }
  }
  return arr;
}

console.log(getMoveData([0,0,1,2,0,21,0,12,0,34,0,0]))