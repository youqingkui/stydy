async = require 'async'
t     = require './t.js'
log   = t.log

fn = async.applyEach [
  (name, cb) ->
    setTimeout () ->
      log '1.2 handle: ' + name + ' A'
      cb null, '123'
    , 500

  (name, cb) ->
    setTimeout () ->
      log '1.2 handle ' + name + ' B'
      cb 'B'
    ,300
]

fn 'simple', (err, res) ->
  log 'err: ', err
  log 'res: ', res