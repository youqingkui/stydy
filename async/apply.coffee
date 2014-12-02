async = require 'async'
t     = require './t.js'
log   = t.log

async.parallel [
  async.apply t.inc, 123
  async.apply t.fire, 100

  ]
  ,(err, result) ->
    log err
    log result



