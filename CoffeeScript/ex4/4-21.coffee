Gift = (@name) ->
  Gift.count++

  @day = Gift.count
  @annouce()
  return

Gift.count = 0
Gift::annouce = ->
  console.log "One day #{@day} if some I recived #{@name}"


Gift1 = new Gift("a some")
Gift2 = new Gift("tow")