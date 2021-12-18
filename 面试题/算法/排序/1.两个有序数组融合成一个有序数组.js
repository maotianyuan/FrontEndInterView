// 两个有序数组融合成一个有序数组

const combine = (left, right) => {
  const [leftEnd] = left.slice(-1);
  const [leftFirst] = left.slice(0);
  const [rightFirst] = right.slice(0);
  const [rightEnd] = right.slice(-1);
  if (leftEnd <= rightFirst) {
    return [...left, ...right];
  } else if (rightEnd <= leftFirst) {
    return [...right, ...left];
  }
  let target = [];
  const max = Math.max(left.length, right.length);
  let i = 0;
  let j = 0;
  while (left[i] && right[j]) {
    // while (i < max || j < max) {
    let l = left[i];
    let r = right[j];
    if (l <= r) {
      target.push(left[i]);
      i++;
    } else if (l > r) {
      target.push(right[j]);
      j++;
    }
  }
  if (i <= left.length - 1) {
    target.push(...left.slice(i, left.length));
  } else if (j <= right.length - 1) {
    target.push(...right.slice(j, right.length));
  }
  return target;
};

// console.log(combine([1, 2, 4], [5, 6, 19]));
// console.log(combine([5, 6, 19], [1, 2, 4]));
console.log(combine([1, 4, 10, 100, 1010, 20000], [2, 6, 100, 1002]));
