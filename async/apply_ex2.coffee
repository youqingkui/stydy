async = require 'async'
t     = require './t.js'
log   = t.log


inc = (a, b, callback, timeout=200) ->
  t.wait(200)
  setTimeout () ->
    callback(null, a + b)
  , timeout


fn = async.apply(inc, 1, 2)

fn (err, n) ->
  log 'inc:' + n
