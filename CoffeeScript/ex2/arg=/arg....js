// Generated by CoffeeScript 1.8.0
(function() {
  var refine,
    __slice = [].slice;

  refine = function() {
    var c, chaff, wheat, _i;
    wheat = arguments[0], chaff = 3 <= arguments.length ? __slice.call(arguments, 1, _i = arguments.length - 1) : (_i = 1, []), c = arguments[_i++];
    console.log(chaff);
    console.log("The best: " + wheat);
    return console.log("the rest: " + chaff);
  };

  refine("one", "2", "3", "5");

}).call(this);

//# sourceMappingURL=arg....js.map
