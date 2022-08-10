const socket = io("http://localhost:8000");
console.log(socket);

socket.on("connect", (data) => {
  socket.on("welcome", (message) => {
    console.log(message);
  });
  socket.emit("message", { data: "Hello!, I am from client." });
});
