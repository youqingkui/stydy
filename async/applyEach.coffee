async = require 'async'
t     = require './t.js'
log   = t.log

async.applyEach [
  (name, cb) ->
    setTimeout () ->
      log '1.1 handle: ' + name + "A"
      cb null, name
    , 500
  (name, cb) ->
    setTimeout () ->
      log '1.1 handle: ' + name  + 'B'
      cb null, name
    , 150
], 'HELLO', (err, result) ->
  log '1.1 err:', err
  log '1.1 res:', result
