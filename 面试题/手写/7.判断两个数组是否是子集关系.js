//  判断两个数组是否是子集关系


const arr1 = [1,2,4];
const arr2 = [2,3,4,6,7];
const arr3 = [1,2,3,4,10];

//  第一版
const isSubSet = (left, right) => {
  let lnL = left.length
  let lnR = right.length
  let targetLeft = right;
  let targetRight = left;
  if (lnL < lnR) {
    targetLeft = left;
    targetRight = right;
  }
  let isSub = true;

  for (let i = 0 ; i < targetLeft.length; i++) {
    if (!targetRight.includes(targetLeft[i])) {
      isSub = false;
      break
    }
  }
  return isSub;
}

// console.log(isSubSet(arr1, arr3));

// 第二版
// 优化 if-else
const isSubSetV2 = (left, right) => {
  let [targetLeft, targetRight] = left.length <= right.length ? [left, right] : [right, left];
  
  let isSub = true;

  for (let i = 0 ; i < targetLeft.length; i++) {
    if (!targetRight.includes(targetLeft[i])) {
      isSub = false;
      break
    }
  }
  return isSub;
}
// console.log(isSubSetV2(arr3, arr1));


// 不创建2个新的变量
const isSubSetV3 = (left, right) => {
  if (left.length > right.length) {
    let temp = [];
    temp = left;
    left = right;
    right = temp;
  }
  let isSub = true;

  for (let i = 0 ; i < left.length; i++) {
    if (!right.includes(left[i])) {
      isSub = false;
      break
    }
  }
  return isSub;
}
// console.log(isSubSetV3(arr2, arr1));

// 更加语义化
const isSubSetV4 = (left, right) => {
  if (left.length > right.length) {
    let temp = [];
    temp = left;
    left = right;
    right = temp;
  }
  const target = left.filter(i => right.includes(i));
  return target.length === left.length;
}
console.log(isSubSetV4(arr2, arr1));