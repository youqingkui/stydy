for x in [1, 2]
  do(x) ->
    setTimeout (->
      console.log(x)
      return
    ), 50
    return

