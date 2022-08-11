const socket = io("http://localhost:8000");

socket.on("messageFromServer", (message) => {
  console.log(message);
  socket.emit("messageToServer", { data: "Hello!, I am from client." });
});

document.querySelector("#message-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#user-message");
  const newMessage = input.value;
  socket.emit("newMessageToServer", { text: newMessage });
  input.value = "";
});
socket.on("messageToClients", (msg) => {
  const ul = document.querySelector("#messages");
  ul.innerHTML += `<li>${msg.text}</li>`;
});

// socket.on("ping", () => {
//   console.log("Ping was recieve from the server.");
// });

// socket.on("pong", (latency) => {
//   console.log(latency);
//   console.log("Pong was sent to the server.");
// });
