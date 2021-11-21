function getUid() {
  return Math.random().toString(36);
}

function has(obj, value) {
  return obj.hasOwnProperty(value);
}

function hide(obj, value) {
  Object.defineProperties(obj, {
    mapKey: {
      value: value,
      writable: true,
    },
  });
}
function isObject(it) {
  return typeof it === "object" ? it !== null : typeof it === "function";
}

function fastKey(it, create) {
  if (!isObject(it)) {
    return typeof it == "symbol"
      ? it
      : (typeof it == "string" ? "S" : "P") + it;
  }
  if (has(it, "mapKey")) {
    return it["mapKey"];
  } else {
    if (create) {
      var uid = getUid();
      hide(it, uid);
      return uid;
    } else {
      return false;
    }
  }
}

function getEntry(that, key) {
  let index = fastKey(key);
  if (index) {
    return that.data[index];
  }
  for (var d in that.data) {
    if (d.i === index) return d;
  }
  return false;
}

function Map() {
  this.data = {};
  this.size = 0;
}

//get方法

Map.prototype.get = function (key) {
  let entry = getEntry(this, key);
  if (entry) {
    return entry.v;
  }
  return false;
};

//清除方式

Map.prototype.clear = function () {
  this.data = {};
  this.size = 0;
};

//是否存在

Map.prototype.has = function (key) {
  let entry = getEntry(this, key);
  return entry ? true : false;
};

//删除

Map.prototype.remove = function (key) {
  let entry = getEntry(this, key);
  if (entry) {
    delete this.data[entry.i];
    this.size--;
    return true;
  }
  return false;
};

//添加

Map.prototype.set = function (key, value) {
  let entry = getEntry(this, key);
  if (entry) {
    entry.v = value;
  } else {
    var index = fastKey(key, true);
    this.data[index] = {
      i: index,
      v: value,
    };
    this.size++;
  }
};

//获取大小

Map.prototype.size = function () {
  return this.size;
};

let a = { a: 1 };
let b = { b: 2 };
let e = 1234;
let arr = [1, 2, 3];
let f = function () {};
let f1 = function () {};

let map = new Map();

map.set(a, "a is a object");
map.set(b, "b is a object");
map.set(e, "e is a type of number");
map.set(arr, "arr is a type of array");
map.set(f, "f is a function");
map.set(f1, "f1 is a function");

map.get(a); //a is a object
map.get(b); //b is a object
map.get(e); //e is a type of number
map.get(arr); //arr is a type of array
map.get(f); //f is a function
map.get(f1); //f1 is a function
