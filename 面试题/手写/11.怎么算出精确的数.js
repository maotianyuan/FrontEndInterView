// 怎么算出精确的数

// (5.2 - 2.82 - 43.11) / (25.01 - 54.11 + 55.2223) * 2.34566 怎么算出精确的数

const getResult = () => {
  const str = `((5.2 - 2.82 - 43.11) / (25.01 - 54.11 + 55.2223)) * 2.34566`;
  const arr = str.split(/[-/()*+]/);
  let pointer = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      let value = arr[i].split(".")[1];
      if (value) {
        let len = `${value}`.replace(/^\s+|\s+$/gm, "").length;
        pointer = len > pointer ? len : pointer;
      }
    }
  }
  return pointer;
};
console.log(getResult());


// - 两个大的字符串类型的数字相加（超出安全范围）：'12328379' + '989987' 返回字符串