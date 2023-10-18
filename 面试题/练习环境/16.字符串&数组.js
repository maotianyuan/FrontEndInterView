// 字符串 [字典序]
// 字典序 abcd 打印出 a、b、c、d、ab、bc、cd、abc、bcd、abcd   
// 字符串包含 // ABCD BAD // AVCD VC 
// 两个字符串，在长字符串中取出包含短字符串的最短字符串：‘abcd’‘ca’=》‘abc’。考虑重复  [字典序 对比 ca 保存最短字符串 ]
// 获取字符串中有重复字符的字符和长度，没有的话返回// abcdabcd =》 abcd // // bbbbb =》 bbbbb // abab = abab // abcabcabcabc => abcabcabcabc [字典序列表，分析是否存在列表，存在的重复]
// 最长不重复子串 // “abcabcbb” =》 abc // pwwkew =》wke // pwkpwo =》kpwo // bbbbb =》 b [字典序列表 遍历每一项，不存在的存目标数组]


const getList = (str) => {
  let arr = str.split('')
  let target = []
  for (let i = 0; i <= arr.length; i++) {
    for(let j = i+1; j <= arr.length; j++) {
      const value = str.substring(i, j)
      let flag = true;
      const tempArr= value.split('')
      // 判断数组中是否存在相同的项目
      let temp = []
      // console.log(value, tempArr)
      for (let k = 0; k <= tempArr.length; k++) {
        if (!temp.includes(tempArr[k])) {
          temp.push(tempArr[k])
        } else {
          flag = false;
          break;
        }
      }
      console.log(flag, value)
      if (flag) {
        target.push(value)
      }
    }
  }
  return target.sort((a, b) => b.length - a.length)
  // return target;
}

const target = getList("pwwkew");
console.log(target)


// 数组
// n 项和等于 sum， [20, 21, 2] // n = sum
// 1-10000 之间对称数 // 
// 0 移动到左边  
// 数组最大连续和最大子串 // [1,2,3,4,5]

