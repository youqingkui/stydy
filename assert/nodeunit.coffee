exports.testPony = (test) ->
  isPony = true
  test.ok(isPony, 'This is not a pony.')
  test.done()