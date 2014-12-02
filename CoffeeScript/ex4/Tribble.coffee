#START:definition
class Tribble
  constructor: ->
    @isAlive = true
    @count = 0
    @test()

  # Prototype properties
  breed: -> new Tribble if @isAlive
  die: ->
    @count-- if @isAlive
    @isAlive = false

  test: ->
    console.log @count

  # Class-level properties
  @count: 1
  @makeTrouble: -> console.log ('Trouble!' for i in [1..@count]).join(' ')
#END:definition

#START:trouble
tribble1 = new Tribble()
tribble2 = new Tribble()
Tribble.makeTrouble()