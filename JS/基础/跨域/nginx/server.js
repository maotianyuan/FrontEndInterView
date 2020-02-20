const path = require('path')
const fs = require('fs')

require('http').createServer((req, res) => {
  var realPath = decodeURIComponent(path.join(__dirname,
    './', 'index.html'));
  fs.exists(realPath, function(exists) {
    fs.readFile(realPath, 'binary', function(err, file) {
      res.writeHead(200, {
        'content-type': 'text/html'
      });
      res.write(file, 'binary');
      res.end();
    })
  })
}).listen(8080, '127.0.0.1');

console.log('启动服务，监听 127.0.0.1:8080');