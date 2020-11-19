const http = require('./src/app')

const port = process.env.PORT || 3000

http.listen(port, function() {
  console.log('listening on *:' + port)
})
