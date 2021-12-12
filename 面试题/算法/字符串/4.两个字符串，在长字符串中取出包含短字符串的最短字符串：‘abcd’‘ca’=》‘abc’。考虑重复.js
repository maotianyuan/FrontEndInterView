// 两个字符串，在长字符串中取出包含短字符串的最短字符串：‘abcd’‘ca’=》‘abc’。考虑重复

// 'abcd' 'ca' 'abc'

const getStr = (long, short) => {
  // let arrL = long.split("");
  let arrS = short.split("");
  let arr = [];
  for (let i = short.length; i < long.length + 1; i++) {
    for (let j = 0; j < long.length + 1; j++) {
      if (j + i <= long.length) {
        const target = long.substring(j, j + i);
        arr.push(target);
      }
    }
  }
  let result = [];
  arr.map((item) => {
    let flag = true;
    for (let i = 0; i < arrS.length; i++) {
      if (!item.includes(arrS[i])) {
        flag = false;
        break;
      }
    }
    if (flag) {
      result.push(item);
    }
  });
  let target = result.sort((a, b) => a.length - b.length) || [];
  let data = [];
  if (target && target[0]) {
    let first = target[0];
    data = [first];

    for (let i = 1; i < target.length; i++) {
      if (target[i].length <= first.length) {
        data.push(target[i]);
      } else {
        break;
      }
    }
    return data;
  } else {
    return [];
  }
};

console.log(getStr("abcd", "ca"));
console.log(getStr("abacad", "ca"));
