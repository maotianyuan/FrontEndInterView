const WebSocket = require('ws')

let wss = new WebSocket.Server({ port: 3000 })
wss.on('connection', function (ws){
  ws.on('message', function (data){
    console.log(data) // 接收
    ws.send(`你好, 8080,我接收到了${data}`) // 发送
  })
})