//  写一下响应式处理的核心逻辑（Object.defineProperty 那段）

let box = document.getElementById("box");

const deretive = (data, key) => {
  Object.defineProperty(data, key, {
    configured: true,
    enumerable: true,
    get(value) {
      console.log("get", value);
      // return value;
    },
    set(value) {
      console.log("set", value);
      box.innerHTML = value;
    },
  });
};

let obj = {
  name: "mty",
};

let input = document.getElementById("input");
input.addEventListener("keyup", function (e) {
  obj.name = e.target.value;
});
