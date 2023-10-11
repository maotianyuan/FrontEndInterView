const arr = [1, 4, 6, 8, 10, 13, 13, 13, 14, 16, 20,20, 40, 50]; // 10


const binarySearch = (data, value) => {
  let startIndex = 0
  let endIndex = data.length - 1
  
  let tag = null
  while(startIndex <= endIndex) {
    const mIndex = parseInt(startIndex + (endIndex - startIndex) / 2);
    const mValue = data[mIndex]
    if (mValue > value) {
      if (tag === null || tag > mIndex) {
        tag = mIndex;
      }
      endIndex = mIndex - 1
    } else if (mValue < value) {
      startIndex = mIndex + 1
    } else if (mValue === value) {
      if (value !== data[mIndex+1] || mIndex === data.length - 1) {
        return mIndex
      }
      startIndex = mIndex + 1;
    }
  }
  return tag
}

const index = binarySearch(arr, 9)
console.log(index)