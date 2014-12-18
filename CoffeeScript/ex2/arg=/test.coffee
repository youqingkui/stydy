chooseMeals = (breakfast = 'waffles', lunch = 'gyros', dinner = 'pizza') ->
  console.log "breakfast", breakfast
  console.log "lunch", lunch
  console.log "dinner", dinner

getRandomSubarray = (arr, size) ->
  shuffled = arr.slice(0)
  i = arr.length
  temp = ""
  index = ""
  while (i--)
    index = Math.floor((i + 1) * Math.random())
    temp = shuffled[index]
    shuffled[index] = shuffled[i]
    shuffled[i] = temp

  return shuffled.slice(0, size)


console.log getRandomSubarray("12345678", 5)
