const socket = io("http://localhost:8000");
const socket2 = io('http://localhost:8000/admin')

socket.on("messageFromServer", (message) => {
  console.log(message);
  socket.emit("messageToServer", { data: "Hello!, I am from client." });
});

socket2.on('welcome', (dataFromServer)=> {
  console.log(dataFromServer)
})

document.querySelector("#message-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#user-message");
  const newMessage = input.value;
  socket.emit("newMessageToServer", { text: newMessage });
  input.value = "";
});

