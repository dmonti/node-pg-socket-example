module.exports = function (io, socket) {
  require("./chat.socket")(io, socket)
}
