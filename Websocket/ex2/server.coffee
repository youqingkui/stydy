WebSocketServer = require("ws").Server
wss = new WebSocketServer({port:8181})

stock_request = {"stocks": ["AAPL", "MSFT", "AMZN", "GOOG", "YHOO"]};
stocks =
  "AAPL": 0,
  "MSFT": 0,
  "AMZN": 0,
  "GOOG": 0,
  "YHOO": 0

ws

