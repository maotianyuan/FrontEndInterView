// abcd 打印出 a、b、c、d、ab、bc、cd、abc、bcd、abcd

// 1: a\ab\abc\abcd
// 2: b\bc\bcd
// 3: c\cd
// 4: d

const handlerStr = (str) => {
  for (let i = 0 ; i < str.length ; i++) { // 0 3
    for (let j = i + 1; j < str.length + 1; j++) { // 4 5
      // console.log(str.substring(i, j));// [) // 3, 4
      console.log(str[i], str[j-1], str.substring(i, j));
    }
  }
}


// 1: a\b\c\d
// 2: ab\bc\cd
// 3: abc\bcd
// 4: abcd
// const handlerStr = (str) => {
//   for (let i = 1 ; i < str.length + 1; i++) {
//     for (let j = 0; j < str.length + 1; j++) {
//       if (j + i <= str.length) {
//         console.log(str.substring(j, j + i));
//       }
//     }
//   }
// }

handlerStr('abcd');
