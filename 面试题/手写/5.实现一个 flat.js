// 实现一个 flat
const arr = [1, 2, 3, 4, [12, 1212, [12]], 98, 1100];

const flatten = (arr, level) => {
  return arr.reduce((prev, next) => {
    if (Array.isArray(next) && level) {
      return [...prev, ...flatten(next, level--)];
    }
    prev.push(next);
    return prev;
  }, []);
};

console.log(flatten(arr, 2));
