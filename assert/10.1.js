// Generated by CoffeeScript 1.8.0
(function() {
  var Todo;

  Todo = function() {
    this.todos = [];
  };

  Todo.prototype.add = function(item) {
    if (!item) {
      throw new Error('Todo#add requires an item');
    }
    return this.todos.push(item);
  };

  Todo.prototype.deleteAll = function() {
    return this.todos = [];
  };

  Todo.prototype.getCount = function() {
    return this.todos.length;
  };

  Todo.prototype.doAsync = function(cb) {
    return setTimeout(cb, 2000, true);
  };

  module.exports = Todo;

}).call(this);

//# sourceMappingURL=10.1.js.map