const ws = new WebSocket('wss://designexam.onrender.com'); // Renderで発行されたURLに変更！

const chatBox = document.getElementById('chat-box');
const input = document.getElementById('chat-input');
const button = document.getElementById('send-btn');

ws.onmessage = (event) => {
  const div = document.createElement('div');
  div.textContent = event.data;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
};

button.addEventListener('click', () => {
  if (input.value.trim() !== '') {
    ws.send(input.value);
    input.value = '';
  }
});
