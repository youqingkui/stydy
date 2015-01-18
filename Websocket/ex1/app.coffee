WebSocketServer = require("ws").Server
wss = new WebSocketServer({port:8282})

wss.on 'connection', (ws) ->
  console.log 'client connection'
  ws.on 'message', (message) ->
    console.log message
