const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());

const server = http.createServer(app);

// instantiate new instance of Server class
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // front-end endpoint
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("send_message", (otherSocketId) => {
    console.log("Socket Ids", socket.id, otherSocketId);
    io.to(otherSocketId).emit("receive_message", "Howdy Partner!");
  });
});

server.listen(PORT, () => {
  console.log("SERVER IS RUNNING AT PORT: ", PORT);
});
