odd = (num) ->
  if typeof num is 'number'
    if num is Math.round num
      if num > 0
        num % 2 is 1

      else
        console.log "#{num} is not positive"

    else
      console.log "#{num} is not integer"

  else
    console.log "#{num} is not a number"

console.log odd(120)
