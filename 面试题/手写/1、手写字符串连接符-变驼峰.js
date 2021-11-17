// 1、手写字符串连接符-变驼峰

function getCamelCase(str) {
  return str.replace(/_([a-z])/g, function(all, i) {
      return i.toUpperCase();
  })
}

function getCamelCase(str) {
  let arr = str.split('_');
  return arr.map((item, index) => {
      if (index === 0) {
          return item;
      } else {
         return item.chartAt(0).toUpperCase() + item.slice(1); 
      }
  }).join('');
}

// Camel To Pascal

// 正则表达式
function getKebabCase(str) {
  let temp = str.replace(/[A-Z]/g, function(i) {
      return '_' + i.toLowerCase();
  })
  if (temp.slice(0,1) === '_') {
      temp = temp.slice(1);   //如果首字母是大写，执行replace时会多一个_，需要去掉
  }
  return temp;
}

function getKebabCase(str) {
  let arr = str.split('');
  let result = arr.map((item) => {
    if (item.toUpperCase() === item) {
        return '_' + item.toLowerCase();
    } else {
        return item;
    }
  }).join('');
  return result;
}