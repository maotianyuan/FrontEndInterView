// 1-5 的随机数 Math.floor( Math.random()\*4 ) + 1 => 1-7 的随机数

const random15 = () => {
  return Math.round((Math.random() * 10 + 1) / 2); // 1 - 5
};

// 1-5 减 1 乘 5 = [0 - 20]

// 1 - 1 * 5 = 0
// 2 - 1 * 5 = 5
// 3 - 1 * 5 = 10
// 4 - 1 * 5 = 15
// 5 - 1 * 5 = 20

// 1 - 25

// 1、2、3
// 4、5、6
// 7、8、9
// 10、11、12
// 13、14、15
// 16、17、18
// 19、20、21

const getRandom17 = () => {
  const baseMax5 = random15();
  const baseMax20 = (random15() - 1) * 5;
  const result = baseMax20 + baseMax5;
  console.log("baseMax20", baseMax20);
  console.log("baseMax5", baseMax5);
  console.log("result", result);
  if (result > 21) {
    return getRandom17();
  }
  return 1 + (result % 7);
};
console.log(getRandom17());
