const WebSocket = require('ws');
const PORT = process.env.PORT || 3000;

const wss = new WebSocket.Server({ port: PORT }, () => {
  console.log(`WebSocket server running on port ${PORT}`);
});

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    // 全員に送信（ブロードキャスト）
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.send('接続成功！チャットを始めましょう。');
});
