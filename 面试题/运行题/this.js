const obj = {
  name: "obj",
  getName: function () {
    return () => {
      return this.name;
    };
  },
};

console.log(obj.getName()()); // obj

const obj2 = {
  name: "obj",
  getName: function () {
    return function () {
      return this.name;
    };
  },
};

console.log(obj2.getName()()); //指向 window name
