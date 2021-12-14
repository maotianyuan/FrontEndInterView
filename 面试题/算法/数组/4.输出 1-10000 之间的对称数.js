// 输出 1-10000 之间的对称数

const getData = () => {
  for (let i = 1; i <= 1000; i++) {
    const arr = `${i}`.split("");
    const target = Number(arr.reverse().join(""));
    if (i === target) {
      console.log(i);
    }
  }
};

console.log(getData());
