x = "ok"
b = "123"
test = (b=b) ->
  console.log "x =>", x
  if b
    console.log "true"

  else
    console.log "false"

test()