var input = {
  "a.b.c.dd": "abcdd",
  "a.d.xx": "adxx",
};

const formatterData = (data) => {
  let obj = {};
  Object.keys(data).forEach((key) => {
    const value = data[key];
    const arr = key.split(".");

    let temp = {};
    arr.forEach((item, index) => {
      if (index === 0) {
        obj[item] = obj[item] || {};
        temp = obj[item];
        return;
      }
      if (index >= arr.length - 1) {
        temp[item] = value;
      } else {
        temp[item] = {};
      }
      temp = temp[item];
    });
  });
  return obj;
};

const result = formatterData(input);
console.log(result);

// current = {};
// target[firstKey] = current;
// temp = current;

// nextCurrent =  {}
// temp[secondKey] = nextCurrent;
// temp = current;

// let obj = {};
// let current = {};
// obj["a"] = current;
// temp = current;

// temp["b"] = {};
// temp = temp["b"];
// console.log(obj);
