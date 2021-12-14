// 1.数组回环：一个数组，输入一个 key 值，则向后移动 key 个位置，并且后面的数字移动到前面: 例如：输入：3;得到：5，4，3，1，2

const getCircle = (arr, step) => {
  let target = [];
  for(let i = 0 ; i < arr.length; i++) {
    if (i >= step) {
      target.unshift(arr[i]);
    } else {
      target.push(arr[i]);
    }
  }
  return target;
}

console.log(getCircle([1,2,3,4,5], 2))



const getCircleV2 = (arr, step) => {
  for(let i = 0 ; i < arr.length; i++) {
    if (i >= step) {
      let [ value ] = arr.splice(i, 1);
      arr.unshift(value);
    }
  }
  return arr;
}

console.log(getCircleV2([1,2,3,4,5], 2))