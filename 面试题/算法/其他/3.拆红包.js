// 实现一个拆红包的功能，比如拆分 100 元，随机到 12 个红包内，不予许有小数
// Math.floor(Math.random()*(max-min+1)+min);

const assetSum = (arr, total) => {
  
  const sum = arr.reduce((prev, cur) => {
    return prev+ cur;
  }, 0)

  console.log(arr, sum, total);
  return sum === total;
}

const redBag = (money, count) => {
  // 100 / 12
  const result = [];
  for (let i = count; i > 0; i--) {
    if (i === 1) {
      result.push(money);
      return result;
    }
    const max = money / i;
    const current = Math.floor(Math.random()*(max-1+1)+1)
    money-=current;
    result.push(current);
  }
  return result;
}


const result = redBag(100, 12)

console.log(assetSum(result, 100))

