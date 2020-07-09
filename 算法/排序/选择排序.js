// 选择排序
// 外层：从 0 到 len-1,i++
// 内层：从 i+1, 到 len-1,j++
// 判断：内层找出最小的 j 与 minIndex 交换

function swap(arr, source, target) {
  var temp = arr[source];
  arr[source] = arr[target];
  arr[target] = temp;
}
function selection(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      minIndex = array[j] < array[minIndex] ? j : minIndex;
    }
    swap(array, i, minIndex);
  }
  return array;
}

const array = [1, 2, 3, 30, 2, 232, 4, 78, 1000, 20, 300, 1000, 23];
console.log(selection(array));
