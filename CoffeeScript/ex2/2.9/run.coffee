run = (fun, arg...) ->
  fun.apply(fun, arg)


fun = (a,b) ->
  console.log(a, b)

run(fun, '1','2')