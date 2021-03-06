// Generated by CoffeeScript 1.8.0
(function() {
  var async, log, t;

  async = require('async');

  t = require('./t.js');

  log = t.log;

  async.applyEach([
    function(name, cb) {
      return setTimeout(function() {
        log('1.1 handle: ' + name + "A");
        return cb(null, name);
      }, 500);
    }, function(name, cb) {
      return setTimeout(function() {
        log('1.1 handle: ' + name + 'B');
        return cb(null, name);
      }, 150);
    }
  ], 'HELLO', function(err, result) {
    log('1.1 err:', err);
    return log('1.1 res:', result);
  });

}).call(this);

//# sourceMappingURL=applyEach.js.map
