// Generated by CoffeeScript 1.8.0
(function() {
  var requisitionStarship;

  requisitionStarship = function(captain) {
    switch (captain) {
      case 'Kirk':
      case 'Picard':
      case 'Archer':
        return new Enterprise();
      case 'Janeway':
        new Voyager();
        break;
      default:
        throw new Error('Invalid starship captain');
    }
  };

}).call(this);

//# sourceMappingURL=4-41.js.map
