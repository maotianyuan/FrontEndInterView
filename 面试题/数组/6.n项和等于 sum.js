// arr 数组
// n 项
// 和等于 sum
// function fn(arr, n, sum)


const arr = [1, 2, 3, 4, 5]; // 1,4 和 2,3。

const getSum = (data) => {
  return data.reduce((prev, next) => prev+next, 0)
}

const getData = (arr, n, sum) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (j+n <= arr.length) {
        let a = arr[i]
        let b = arr.slice(j , j+ n);
        const newArr = [a,...b];
        const newSum = getSum(newArr);
        if (sum === newSum) {
          result.push(newArr)
        }
      }
    }
  }
  return result;
}

console.log(getData(arr, 1, 5))
console.log(getData(arr, 2, 6))