Raven = ->
Raven::quoth = -> console.log 'Nevermore'
raven1 = new Raven()
raven1.quoth() # Nevermore

Raven::quoth = -> console.log "I'm hungry"
raven1.quoth() # I'm hungry

raven2 = new Raven()
raven2.quoth = -> console.log "new some"


console.log raven1.hasOwnProperty('quoth') # false
console.log raven2.hasOwnProperty('quoth') # true