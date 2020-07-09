const array = [1, 4, 6, 8, 10, 13, 13, 13, 14, 16, 20, 40, 50]; // 10

function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let index = start + ((end - start) >> 1); // 大数溢出
    let mIndex = parseInt(start + (end - start) / 2); // 大数溢出
    let mValue = arr[mIndex];
    if (mValue === value) {
      return mIndex;
    } else if (mValue < value) {
      start = mIndex + 1;
    } else if (mValue > value) {
      end = mIndex - 1;
    }
  }
  return -1;
}

const index = binarySearch(array, 50);
console.log(index);
