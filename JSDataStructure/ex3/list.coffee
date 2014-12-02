List = () ->
  @listSize   = 0
  @pos        = 0
  @dataStore  = []
  @clear      = clear
  @find       = find
  @toString   = toString
  @insert     = insert
  @append     = append
  @remove     = remove
  @front      = front
  @end        = end
  @prev       = prev
  @next       = next
  @length     = length
  @currPos    = currPos
  @moveTo     = moveTo
  @getElement = getElement
  @contains   = contains

  return


append = (element) ->
  @dataStore[@listSize++] = element
  return

find = (element) ->
  for i,j in @dataStore
    if i == element
      return j

  return -1

remove = (element) ->
  fountAt = @find(element)
  if fountAt > -1
    @dataStore.splice(fountAt, 1)
    ++@listSize
    return true

  else
    return false

length = ->
  return @listSize


toString = ->
  return @dataStore

insert = (element, after) ->
  insertPos = @find(after)
  if insertPos > -1
    @dataStore.splice(insertPos+1, 0, element)
    ++@listSize
    return true

  else
    return false

clear = ->
  delete @dataStore
  @dataStore.length = 0
  @listSize = @pos = 0

contains = (element) ->
  for i in @dataStore
    if i is element
      return true

  return false


front = ->
  @pos = 0

  return

end   = ->
  @pos = @listSize - 1
  return

prev  = ->
  if @pos >= 0
    --@pos

  return

next = ->
  if @pos < @listSize
    ++@pos

  return


currPos = ->
  @pos


moveTo = (postion) ->
  @pos = postion

  return

getElement = () ->
  @dataStore[@pos]


list = new List()
list.append(1)
list.append(4)
list.append(5)

console.log(list)
#console.log(list.length())
#console.log(list.currPos())
#console.log(list.listSize)
list.front()
while list.currPos() < list.length()
  console.log list.getElement()
  list.next()

console.log "-----------"

list.end()
while list.currPos() >= 0
  console.log list.getElement()
  list.prev()



