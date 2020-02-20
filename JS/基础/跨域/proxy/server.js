const url = require('url');
const path = require('path');
const fs = require('fs');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({
  target: 'http://0.0.0.0:9000', //默认接口地址
  secure: false,
  changeOrigin:true,
});

require('http').createServer((req, res) => {
  var realPath = decodeURIComponent(path.join(__dirname,
    './','index.html'));
  const { pathname } = url.parse(req.url)
  if (pathname === '/proxy') {
    proxy.web(req, res, { target: 'http://0.0.0.0:9000' }); // 跨域核心
    return;
  }
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


