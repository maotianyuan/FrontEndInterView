
let obj = {
  a: 1, 
  b: {
    c: 'abc'
  },
  x: 10
}

obj.x = obj;

const deepClone = (value, cache = new WeakMap()) => {
  if (!value) return value;
  if (typeof value !== 'object') return value;
  
  if(cache.get(value)) {
    return value;
  }

  let result = new value.constructor;
  cache.set(value, result);

  Object.keys(value).forEach(item => {
    result[item] = deepClone(value[item], cache);
  })

  return result;
}

let result = deepClone(obj);
console.log(result);