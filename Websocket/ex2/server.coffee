WebSocketServer = require("ws").Server
wss = new WebSocketServer({port:8181})

stock_request = {"stocks": ["AAPL", "MSFT", "AMZN", "GOOG", "YHOO"]};
stocks =
  "AAPL": 0,
  "MSFT": 0,
  "AMZN": 0,
  "GOOG": 0,
  "YHOO": 0

ws.open = (e) ->
  console.log("Connection established")
  ws.send(JSON.stringify(stock_request))


ws.onerror = (e) ->
  console.log("WebSocket failure, error", e);
  handleErrors(e);

ws.onclose = (e) ->
  console.log("WebSocket connection closed", e)
  for symbol of stocks
    if stocks.hasOwnProperty(symbol)
      stocks[symbol] = 0