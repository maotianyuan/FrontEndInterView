const url = require('url');
const path = require('path')
const fs = require('fs')

require('http').createServer((req, res) => {
  const { pathname } = url.parse(req.url)
  console.log(pathname)
  if (pathname === '/a1' || pathname === '/a2') {
    var realPath = decodeURIComponent(path.join(__dirname,
      `.${pathname}.html`));
    
    fs.exists(realPath, function(exists) {
      fs.readFile(realPath, 'binary', function(err, file) {
        res.writeHead(200, {
          'content-type': 'text/html'
        });
        res.write(file, 'binary');
        res.end();
      })
    })
  }
}).listen(8080, '127.0.0.1');

console.log('启动发起端服务，监听 127.0.0.1:8080');