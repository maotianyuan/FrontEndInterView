// location.search
// 手写个方法，过滤掉 location.search 中的 `c=1`，`https://a.com/?b=0&c=1#/def?g=2&c=1&h=3#ijk_c=1`

const myStringify = (url) => {
  let firstIndex = url.indexOf('?');
  let lastIndex = url.lastIndexOf('?');
  let endIndex = url.lastIndexOf('#');
  const base = url.substring(0, firstIndex);
  const str = url.substring(lastIndex + 1, endIndex);
  const arr = str.split(/[&#]/);
  const target = {};
  arr.map(item => {
    const [key , value ] = item.split('=')
    if (key !== 'c') {
      target[key] = target[key] || {};
      target[key] = value;
    }
  })
  let params = [];
  Object.keys(target).map(i => {
    let str = `${i}=${target[i]}`;
    params.push(str);
  })

  return `${base}?${params.join('&')}${url.substring(endIndex)}`;
}
console.log(myStringify('https://a.com/?b=0&c=1#/def?g=2&c=1&h=3#ijk_c=1'))


// 