// 最长不重复子串问题

// “abcabcbb” =》 abc
// bbbbb =》 b
// pwwkew =》wke
// pwkpwo =》kpwo

const getLongNoRepeatStr = (str) => {
  const arr = str.split("");
  let target = [];
  for (let i = 0; i < arr.length; i++) {
    let result = [arr[i]];
    for (let j = i + 1; j < arr.length; j++) {
      let current = arr[j];
      if (!result.includes(current)) {
        result.push(arr[j]);
      } else {
        break;
      }
    }
    target.push(result);
  }
  const [first] = target.sort((a, b) => b.length - a.length);
  return first;
};

// const result = getLongNoRepeatStr("abcabcbb");
// const result = getLongNoRepeatStr("bbbbb");
// const result = getLongNoRepeatStr("pwwkew");
const result = getLongNoRepeatStr("pwkpwo");

console.log(result);
