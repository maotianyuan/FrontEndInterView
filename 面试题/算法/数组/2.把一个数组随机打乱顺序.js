// 把一个数组随机打乱顺序

// [1,2,3,4,4,5];
// 依次计算随机数，随机数范围为数组长度

const getRandomArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const len = arr.length;
    let v = Math.floor(Math.random() * len);
    let temp = arr[i];
    arr[i] = arr[v];
    arr[v] = temp;
  }
  return arr;
};

console.log(getRandomArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
