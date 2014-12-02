async = require 'async'

async.auto
  oneFun:(cb) ->
    a = 123
    b = 456
    console.log "hello"

    cb(null, a,b,"123")

  towFun:["oneFun", (cb, result) ->
    console.log "123"
    console.log result
  ]