assert = require('assert')
Todo = require('./10.1')
todo = new Todo()
testsCompleted = 0

deleteTest = () ->
  todo.add('Delete Me')
  assert.equal(todo.getCount(), 1, '1 item should exist')
  todo.deleteAll()
  assert.equal(todo.getCount(), 0, 'No items should exist')
  testsCompleted++

addTest = () ->
  todo.deleteAll()
  todo.add('Added')
  assert.notEqual(todo.getCount(), 0, '1 item should exist')
  testsCompleted++

doAsyncTest = (cb) ->
  todo.doAsync (value) ->
    assert.ok(value,'Callback should be passed true')
    testsCompleted++
    cb()

throwsTest = (cb) ->
  assert.throws(todo.add, /requires/)
  testsCompleted++

deleteTest()
throwsTest()
doAsyncTest () ->
  console.log('Completed ' + testsCompleted + ' tests')


