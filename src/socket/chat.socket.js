module.exports = function (io, socket) {
  socket.on("chat message", function (msg) {
    io.emit("chat message", msg)
  })
}
