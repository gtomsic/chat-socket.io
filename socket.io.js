// If we didn't use express we need http
const express = require("express");
const cors = require("cors");
const app = express();
// We use socket.io instead of ws
const socketio = require("socket.io");

app.use(cors());
app.use(express.json());

app.use(express.static(__dirname + "/public"));

const server = app.listen(8000);

const io = socketio(server);

io.on("connection", (socket, req) => {
  socket.emit("messageFromServer", {
    data: "Welcome to the socket.io server!!!",
  });
  socket.on("messageToServer", (msg) => {
    console.log(msg);
  });
  socket.on("newMessageToServer", (msg) => {
    io.emit("messageToClients", { text: msg.text });
  });
});
