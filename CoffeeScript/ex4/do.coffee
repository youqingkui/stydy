arr = [1..10]
for x in arr
  do (x) ->
    setTimeout (-> console.log x), 0