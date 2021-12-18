// 玩牌
// 给定一个有序数组A, 插入一个数值，进行排序

function inster(arr, i, x) {
  let p = i - 1;
  while (p >= 0 && arr[p] > x) {
    arr[p + 1] = arr[p];
    p--;
  }
  arr[p + 1] = x;
}
function insert_sort(arr) {
  for (var i = 1; i < arr.length; i++) {
    inster(arr, i, arr[i]);
  }
}
const arr = [1, 2, 34, 23, 111, 11111, 100];
insert_sort(arr);
console.log(arr);

//----------------------------------------------------------------

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
function insertSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    let pointer = arr[i];
    for (var j = i - 1; arr[j] > pointer && j >= 0; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = pointer;
  }
}
var arr = [1, 2, 3, 4, 3, 434, 111, 10];
insertSort(arr);
console.log(arr);
