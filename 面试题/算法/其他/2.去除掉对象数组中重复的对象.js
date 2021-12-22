// 去除掉对象数组中重复的对象

const arr = [
  1,
  {a: {b: 1, c: 2}, w: 2},
  {a: {b: 1, c: 2}, w: 2},
  2,
  1,
  [1,23]
]

const equalObj = (current, other) => {
  if (other instanceof Object) {
    if (Object.keys(other).length !== Object.keys(current).length) {
      return false;
    }
    let flag = true;
    for (let key in current) {
      let c = current[key];
      if (c instanceof Object) {
        flag = equalObj(c, other[key]);
        if (flag === false) {
          break;
        }
      } else {
        if (current[key] !== other[key]) {
          flag = false;
          break;
        }
      }
      
    }
    return flag;
  }
  return false;
}


const unique = (arr) => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    
    if (item instanceof Object) {
      if (!result.some(item2 => equalObj(item, item2))) {
        result.push(item)
      }
    } else {
      if (!result.includes(item)) {
        result.push(item)
      }
    }
  }
  return result
}

console.log(unique(arr));