// 二分查找

const array = [1, 4, 6, 8, 10, 13, 13, 13, 14, 16, 20, 40, 50]; // 10

const binarySearch = (arr, value) => {
  const len = arr.length;
  let start = 0;
  let end = len - 1;
  while (start <= end) {
    // let index = start + ((end - start) >> 1); // 大数溢出
    let middleIndex = parseInt(start + (end - start) / 2); // 大数溢出
    const middleValue = arr[middleIndex];
    if (middleValue > value) {
      end = middleIndex - 1;
    } else if (middleValue < value) {
      start = middleIndex + 1;
    } else if (middleValue === value) {
      return middleIndex;
    }
  }
  return -1;
};

const index = binarySearch(array, 10);
console.log(index);

// nlongn;

// - 有 10 个仓库的乒乓球，其中一个仓库乒乓球重量 11g/每个，其他都是 10g/每个，有一个秤可以准确秤出任意个乒乓球的重量，问：怎么在秤的次数最少的情况下，找到 11g 乒乓球所在的仓库

// 二分查找，五五分租
