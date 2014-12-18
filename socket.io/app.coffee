app = require('express').createServer()
io = require('socket.io')(app)
app.listen(80)
app.get '/', (req, res) ->
  res.sendfile __dirname + '/index.html'

io.on 'connection', (socket) ->
  socket.emit 'news', {hello:'hi'}
  socket.on 'my other event', (data) ->
    console.log data