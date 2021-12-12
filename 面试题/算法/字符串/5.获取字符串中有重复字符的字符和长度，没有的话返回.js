// 获取字符串中有重复字符的字符和长度，没有的话返回

const getStr = (long) => {
  let arr = [];
  for (let i = 2; i < long.length + 1; i++) {
    let result = [];
    let data = [];
    for (let j = 0; j < long.length + 1; j++) {
      if (j + i <= long.length) {
        const target = long.substring(j, j + i);
        // console.log(target);
        if (!result.includes(target)) {
          result.push(target);
        } else {
          !data.includes(target) && data.push(target);
          // target && data.push(target);
        }
      }
    }
    console.log(data);
    // console.log("result", result);
    // console.log("data", data);
    // if (data.length > 0) {
    //   arr.push(data);
    // }
  }
  return arr;
};

// abcdabcd =》 abcd
// bbbbb =》 bbbbb
// abab = abab
// abcabcabcabc => abcabcabcabc
