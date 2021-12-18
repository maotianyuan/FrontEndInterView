//# 思想
// 先找到一个数组中支点，默认一般是数组第一位
// 遍历数据每个元素，将小于支点放到做不，大于支点放到右边，形成两个数组。最后将支点放到分界处
// 分别对左右表重复上诉过程，知道每个数组只有一个记录，排序完成 -->

function Qsort(arr) {
  let pointer = arr[0];
  if (arr.length <= 1) return arr;
  let left = [];
  let right = [];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] <= pointer) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  left = Qsort(left);
  right = Qsort(right);
  return [...left, pointer, ...right];
}
var arr = [12, 1, 3, 54, 100, -100, 1000, 50, 32, 1, 5, 6, 9];
var end = Qsort(arr);
console.log(end);
