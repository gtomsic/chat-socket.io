// If we didn't use express we need http
const http = require("http");
// We use socket.io instead of ws
const socketio = require("socket.io");

// Creating a http server with node
const server = http.createServer((req, res) => {
  res.end("I am connected");
});

const io = socketio(server);

io.on("connection", (socket, req) => {
  socket.emit("Welcome to the socket.io server!!!");
  socket.on("message", (msg) => {
    console.log(msg);
  });
});

server.listen(8000);
