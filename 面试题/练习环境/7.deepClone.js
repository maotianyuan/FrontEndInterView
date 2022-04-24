let obj = {
  a: 1,
  b: {
    c: "abc",
  },
  x: 10,
};

obj.x = obj;

const deepClone = () => {};

let result = deepClone(obj);
console.log(result);
