const ws = new WebSocket('wss://designexam.onrender.com'); // Renderで発行されたURLに変更！


const chatBox = document.getElementById('chat-box');
const input = document.getElementById('chat-input');
const button = document.getElementById('send-btn');

ws.onmessage = async (event) => {

  let text;

  if (typeof event.data === 'string') {
    text = event.data;
  } else if (event.data instanceof Blob) {
    text = await event.data.text();
  } else {
    text = JSON.stringify(event.data);
  }

  const div = document.createElement('div');
  div.textContent = event.data;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
  const msg = document.createElement('div');
  msg.textContent = event.data;
  chatBox.appendChild(msg);
};

button.addEventListener('click', () => {
  if (input.value.trim() !== '') {
    ws.send(input.value);
    input.value = '';
  }
});
