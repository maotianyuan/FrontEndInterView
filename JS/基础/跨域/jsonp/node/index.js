const url = require('url');
	
require('http').createServer((req, res) => {
  const data = {
    "q":"跨域",
    "p":false,
    "g":[
      {"type":"sug","sa":"s_1","q":"跨域解决方案"},
      {"type":"sug","sa":"s_2","q":"跨域物流"},
      {"type":"sug","sa":"s_3","q":"跨域立案"},
      {"type":"sug","sa":"s_4","q":"跨域是什么"},
      {"type":"sug","sa":"s_5","q":"跨域请求"},
      {"type":"sug","sa":"s_6","q":"跨越速运单号查询"},
      {"type":"sug","sa":"s_7","q":"跨域问题"},
      {"type":"sug","sa":"s_8","q":"跨越速运"},
      {"type":"sug","sa":"s_9","q":"跨域访问"},
      {"type":"sug","sa":"s_10","q":"跨域立案诉讼服务规定"}
    ],
    "slid":"10238582904221488926"
  }
  
  const callback = url.parse(req.url, true)
  .query.cb;
  res.writeHead(200);
  res.end(`${callback}(${JSON.stringify(data)})`);
}).listen(9000, '127.0.0.1');

console.log('启动服务，监听 127.0.0.1:9000');