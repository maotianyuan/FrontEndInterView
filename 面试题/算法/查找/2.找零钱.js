// - 假设有数目不限的面值为 20,10,5,1 的硬币。 给出需要找零数，求出找零方案，要求：使用数目最少的硬币，并解释说明

// [20,10,5,1]
// 21,
// 硬币最少 [20, 1]\[10,10,1]\[5,5,5,5,1]\[10,5,1]

// 100/20 = 5
// 110 / 20 = 5.5
// 110 % 20 = 10

const getBase = (v) => {
  const arr = [20, 10, 5, 1];
  for (let i = 0; i < arr.length; i++) {
    if (v >= arr[i]) {
      return arr[i];
      break;
    }
  }
};

const findMoney = (value, target) => {
  const base = getBase(value);
  const yushu = value % base;
  const num = parseInt(value / base);
  target.push({
    id: base,
    num,
  });
  if (yushu !== 0) {
    findMoney(yushu, target);
  }
  return target;
};

let target = [];
const result = findMoney(112, target);
console.log(result);
