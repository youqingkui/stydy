// Generated by CoffeeScript 1.8.0
(function() {
  var copy, original;

  original = ['Mary', 'Poppins'];

  copy = original.slice(0);

  console.log(copy);

  console.log('Sh' + copy[0].slice(1));

  copy[0] = 'Sh' + copy[0].slice(1);

  copy[1] = 'B' + copy[1].slice(1);

  console.log(original.join(' || '));

}).call(this);

//# sourceMappingURL=3-91.js.map