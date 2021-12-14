// 求数组中的最大连续和最大的子串


// const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // [4, -1, 2, 1]
const arr = [1, -2, 3, 10, -4, 7, 2, -5]; // 3, 10, -4, 7, 2

const getSum = (data) => {
  return data.reduce((prev, next) => prev+next, 0)
}
const getData = (arr) => {
  let result = [];
  let maxArr = [];
  for (let i = 0 ; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i+j <= arr.length) {
        const a = arr.slice(i, i+j);
        const sum = getSum(a);
        result.push(sum);
        const b = Math.max(...result);
        if (sum === b) {
          maxArr = a;
        }
      }
    }
  }
  // const [first] = result.sort((a,b)=>b-a);
  // return first;
  return maxArr;
}
console.log(getData(arr))