const WhiteList = [
  'http://localhost:8080',
  'http://127.0.0.1:8080',
]
require('http').createServer((req, res) => {
  const { origin } = req.headers
  if (WhiteList.includes(origin)) {
    res.writeHead(200, {
      'Access-Control-Allow-Origin': origin, // 跨域核心，设置该源可访问
      // 'Access-Control-Allow-Methods': 'PUT' // 除了 GET POST 
    });
  }
  if(req.method === 'OPTIONS') {
    res.end();
  }
  res.end('成功返回 9000 端口号的数据');

}).listen(9000, '127.0.0.1');

console.log('启动服务，监听 127.0.0.1:9000');

