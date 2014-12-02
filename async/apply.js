// Generated by CoffeeScript 1.8.0
(function() {
  var async, log, t;

  async = require('async');

  t = require('./t.js');

  log = t.log;

  async.parallel([async.apply(t.inc, 123), async.apply(t.fire, 100)], function(err, result) {
    log(err);
    return log(result);
  });

}).call(this);

//# sourceMappingURL=apply.js.map