// # 思想
// 外层：从 len-1 到 0
// 内层：从0 到 i
// 判断：相邻j 大小关系

// 首先将第一个和第二个进行比较，一大于二则交换位置
// 再有 二和三比较，大于则交换位置，小于不动
// 直到最后一项结束，吧最大的冒出
// 第二趟：第一个根第二个比较，一直到最后一项前一位。

function swap(arr, source, target) {
  const temp = arr[source];
  arr[source] = arr[target];
  arr[target] = temp;
}
function bubble_sort(array) {
  for (var i = array.length - 1; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}
//  n + (n - 1) + (n - 2) + 1
// O(n * n)
const array = [1, 2, 3, 30, 2, 232, 4, 78, 1000, 20, 300, 1000];
console.log(bubble_sort(array));
