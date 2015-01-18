CArray = (numElements) ->
  @dataStore = []
  @pos = 0
  @numElements = numElements

  i = 0
  while i < @numElements
    @dataStore[i] = i
    i++

  return


CArray::insert = (element) ->
  @dataStore[@pos++] = element


CArray::toString = () ->
  restr = ""
  for v, i in @dataStore
    restr += v + " "
    if i > 0 and i % 10 is 0
      restr += "\n"

  return restr




CArray::clear = () ->
  for v, i in @dataStore
    @dataStore[i] = 0




CArray::setData = () ->
  i = 0
  while i < @numElements
    @dataStore[i] = Math.floor(Math.random() * (@numElements + 1))
    i++


CArray::swap = (arr, index1, index2) ->
  tmp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = tmp


CArray::bubbleSort = () ->
  numElements = @dataStore.length
  outer = numElements
  while outer >= 2
    inner = 0
    console.log "out ==> ", outer
    console.log "outer - 1 ==> ", outer - 1
    while inner <= outer - 1
      console.log "@dataStore[inner + 1]", @dataStore[inner + 1]
      if @dataStore[inner] > @dataStore[inner + 1]
        @swap(@dataStore, inner, inner + 1)

      console.log myNums.toString()
      console.log("")
      inner++

    outer--


CArray::selectionSort = () ->
  outer = 0
  while outer <= @dataStore.length - 2
    min   = outer
    inner = outer + 1
    while inner <= @dataStore.length - 1
      if @dataStore[inner] < @dataStore[min]
        min = inner

      @swap(@dataStore, outer, min)




numElements = 8
myNums = new CArray(numElements)
myNums.setData()
console.log myNums.toString()
console.log("")
myNums.bubbleSort()
console.log myNums.toString()


