//  实现一个 Map，实现 Map 的创建、插入、读取、遍历

class Map {
  constructor() {
    this.map = {};
    this._size = 0;
    this.index = 0;
  }
  formatterKey(key) {
    if (typeof key !== "function") {
      // 两个相同的值，会发生覆盖
      return Symbol.for(JSON.stringify(key));
    }
    return Symbol.for(key);
  }
  get(key) {
    return this.map[this.formatterKey(key)];
  }
  set(key, value) {
    this._size++;
    this.map[this.formatterKey(key)] = value;
  }
  has(key) {
    return !!this.map[this.formatterKey(key)];
  }
  remove(key) {
    const _key = this.formatterKey(key);
    this._size--;
    delete this.map[_key];
  }
  size() {
    return this._size;
  }
  clear() {
    this.map = {};
  }
  values() {
    console.log(Reflect.ownKeys(this.map));
    return Object.getOwnPropertySymbols(this.map).map((item) => this.map[item]);
  }
  entries(cb) {
    console.log(this.map);
    Object.getOwnPropertySymbols(this.map).map((key) => {
      cb(key, this.map[key]);
    });
  }
}

let fn = function () {};
const map = new Map();

let a = { a: 1 };
let b = { b: 2 };
let e = 1234;
let arr = [1, 2, 3];
let f = function () {};
let f1 = function () {};

map.set(a, "a is a object");
map.set(b, "b is a object");
map.set(e, "e is a type of number");
map.set(arr, "arr is a type of array");
map.set(f, "f is a function");
// map.set(f1, "f1 is a function");

console.log(map.get(a)); //a is a object
console.log(map.get(b)); //b is a object
console.log(map.get(e)); //e is a type of number
console.log(map.get(arr)); //arr is a type of array
console.log(map.get(f)); //f is a function

console.log(map.size());
console.log(map.values());
map.entries((key, value) => {
  console.log(key, value);
});
console.log(map.has(b));
console.log(map.has(a));
console.log(map.has(arr));
