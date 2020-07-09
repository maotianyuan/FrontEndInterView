// 反转字符串

// const str = "-1024";
// const reverseStr = (str) => {
//   if (isNumber(str))
// }
// const target = str.split("").reverse().join("");
// console.log(target);

const reverse = (x) => {
  // 获取相应数的绝对值
  let int = Math.abs(x); // 1009
  let num = 0;

  // 遍历循环生成每一位数字
  while (int !== 0) {
    // 借鉴欧几里得算法，从 num 的最后一位开始取值拼成新的数
    num = (int % 10) + num * 10; // 9   90  900 900 + 1
    // 剔除掉被消费的部分
    int = Math.floor(int / 10); // 100  10  1 9001
  }
  console.log(num);

  if (x < 0) {
    return num * -1;
  }
  return num;
};
console.log(reverse("1234"));
