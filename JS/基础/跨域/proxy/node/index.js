const url = require('url');

require('http').createServer((req, res) => {
  const { pathname } = url.parse(req.url)
  if (pathname === '/proxy') {
    res.end('成功返回 9000 端口号的 /proxy 数据');
  }
}).listen(9000, '127.0.0.1');

console.log('启动服务，监听 127.0.0.1:9000');

