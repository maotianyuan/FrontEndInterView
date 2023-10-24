// arr 数组
// n 项
// 和等于 sum
// function fn(arr, n, sum)

const arr = [1, 2, 3, 4, -1, 0, 6, 5]; // 1,4 和 2,3。
const getSum = (data) => {
  return data.reduce((prev, next) => prev + next, 0);
};
const getDataV2 = (arr, n, sum) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(i, j);
      if (j + n <= arr.length) {
        let a = arr[i];
        let b = arr.slice(j, j + n);
        const newArr = [a, ...b];
        const newSum = getSum(newArr);
        if (sum === newSum) {
          result.push(newArr);
        }
      }
    }
  }
  return result;
};

const getDataV3 = (arr, sum) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        const newSum = getSum([arr[i], arr[j], arr[k]]);
        if (newSum === sum) {
          result.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }
  return result;
};

const getDataVN = (arr, n, sum) => {
  let result = [];
  return result;
};
// console.log(getDataV2(arr, 1, 5))
// console.log(getDataV3(arr, 2, 6))
// console.log(getDataVN(arr, 4, 6))

// https://juejin.cn/post/6894787422807130119#heading-3
