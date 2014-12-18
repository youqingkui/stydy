Todo = () ->
  @todos = []
  return

Todo::add = (item) ->
  if not item
    throw new Error('Todo#add requires an item')
  @todos.push item

Todo::deleteAll = () ->
  @todos = []

Todo::getCount = () ->
  return @todos.length

Todo::doAsync = (cb) ->
  setTimeout(cb, 2000, true)

module.exports = Todo