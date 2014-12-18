#refine = (wheat, chaff..., c) ->
#  console.log "The best: #{wheat}"
#  console.log "The rest: #{chaff.join(', ')}"
#  console.log "the rest: #{chaff}"
#  console.log "the c: #{c}"
#
#refine("123", "rest1", "rest2", "hello")


refine = (wheat, chaff..., c) ->
  console.log chaff
  console.log "The best: #{wheat}"
  console.log "the rest: #{chaff}"



refine("one", "2", "3", "5")