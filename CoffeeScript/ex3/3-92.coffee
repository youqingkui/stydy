once = ->
  if once.hasRun
    null
  else
    once.hasRun = true
    [1, 2, 3]
console.log x for x in once()