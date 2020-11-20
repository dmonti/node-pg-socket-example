const express = require("express")
const app = express()
const http = require("http").Server(app)

var io = require("socket.io")(http)
//io.origins('http://localhost:8080')
io.on("connection", function (socket) {
  require("./socket/index")(io, socket)
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.json({ type: "application/vnd.api+json" }))

const cors = require("cors")
//app.use(cors({ origin: 'http://localhost:8080', credentials: true }))

const index = require("./routes/index")
app.use(index)

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "public" })
})

module.exports = http
