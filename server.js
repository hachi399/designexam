const WebSocket = require('ws');
const PORT = process.env.PORT || 3000;

const wss = new WebSocket.Server({ port: PORT }, () => {
  console.log(`WebSocket server running on port ${PORT}`);
});

wss.on('connection', (ws) => {
  console.log('クライアントが接続しました')
  ws.on('message', message => {
  const text = message.toString(); // Buffer → string に変換
  server.on('connection', ws => {
  ws.on('message', message => {
    const text = message.toString(); // 念のため文字列化
    server.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(text);  // 自分自身にも送信する
      }
    });
  });
});

});


  ws.send('接続成功！チャットを始めましょう。');
});
