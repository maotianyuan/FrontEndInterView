# ajax原生实现

```js
var xhr = XMLHttpRequest ? new XMLHttpRequest() : new window.ActiveXObject('Microsoft.XMLHTTP')
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200 || xhr.status == 304) {
      var obj = {
        text: xhr.responseText,
        json: JSON.parse(xhr.responseText),
      };
      var data = obj[dataType];
      if(typeof c.success === "function") {
        c.success(data);
      }
  }   
}
```
```js
function ajax(opt) {
  var xhr = XMLHttpRequest ? new XMLHttpRequest() : new window.ActivedXObject('Microsoft.XMLHTTP')
  var data = opt.data,
  url = opt.url,
  type = opt.type.toUpperCase(),
  dataArr = []
  for(k in data) {
    dataArr.push(k + '=' + data[k])
  }
  if (type === 'GET') {
    url = url + '?' + dataArr.join('&')
    xhr.open(type, url.replace(/\?&/g, ''), true)
    xhr.send()
  } else if (type === 'POST') {
    xhr.open(type, url, true)
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    xhr.send(dataArr.join('&'))
  }
  xhr.onload = function() {
    if (xhr.status === 200 || xhr.status === 304) {
      var res;
      if (opt.success || opt.success instanceof Function) {
        res = xhr.responseText;
        if (typeof res === 'string') {
          res = JSON.parse(res)
          opt.success.call(xhr,res)
        }
      }
    } else {
      if (opt.error || opt.error instanceof Function) {
          opt.error.call(xhr,res)
      }
    }
  }
}
```