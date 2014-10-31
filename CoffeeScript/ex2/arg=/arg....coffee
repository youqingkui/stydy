refine = (wheat, chaff..., c) ->
  console.log "The best: #{wheat}"
  console.log "The rest: #{chaff.join(', ')}"
  console.log "the rest: #{chaff}"

refine("123", "hello")