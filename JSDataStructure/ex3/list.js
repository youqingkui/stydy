// Generated by CoffeeScript 1.8.0
(function() {
  var List, append, clear, contains, currPos, end, find, front, getElement, insert, length, list, moveTo, next, prev, remove, toString;

  List = function() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
  };

  append = function(element) {
    this.dataStore[this.listSize++] = element;
  };

  find = function(element) {
    var i, j, _i, _len, _ref;
    _ref = this.dataStore;
    for (j = _i = 0, _len = _ref.length; _i < _len; j = ++_i) {
      i = _ref[j];
      if (i === element) {
        return j;
      }
    }
    return -1;
  };

  remove = function(element) {
    var fountAt;
    fountAt = this.find(element);
    if (fountAt > -1) {
      this.dataStore.splice(fountAt, 1);
      ++this.listSize;
      return true;
    } else {
      return false;
    }
  };

  length = function() {
    return this.listSize;
  };

  toString = function() {
    return this.dataStore;
  };

  insert = function(element, after) {
    var insertPos;
    insertPos = this.find(after);
    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element);
      ++this.listSize;
      return true;
    } else {
      return false;
    }
  };

  clear = function() {
    delete this.dataStore;
    this.dataStore.length = 0;
    return this.listSize = this.pos = 0;
  };

  contains = function(element) {
    var i, _i, _len, _ref;
    _ref = this.dataStore;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      i = _ref[_i];
      if (i === element) {
        return true;
      }
    }
    return false;
  };

  front = function() {
    this.pos = 0;
  };

  end = function() {
    this.pos = this.listSize - 1;
  };

  prev = function() {
    if (this.pos >= 0) {
      --this.pos;
    }
  };

  next = function() {
    if (this.pos < this.listSize) {
      ++this.pos;
    }
  };

  currPos = function() {
    return this.pos;
  };

  moveTo = function(postion) {
    this.pos = postion;
  };

  getElement = function() {
    return this.dataStore[this.pos];
  };

  list = new List();

  list.append(1);

  list.append(4);

  list.append(5);

  console.log(list);

  list.front();

  while (list.currPos() < list.length()) {
    console.log(list.getElement());
    list.next();
  }

  console.log("-----------");

  list.end();

  while (list.currPos() >= 0) {
    console.log(list.getElement());
    list.prev();
  }

}).call(this);

//# sourceMappingURL=list.js.map
