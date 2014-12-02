// Generated by CoffeeScript 1.8.0
(function() {
  var Circle, Shape, Square, showArea,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Shape = (function() {
    function Shape(width) {
      this.width = width;
    }

    Shape.prototype.computeArea = function() {
      throw new Error('I am an abstract class!');
    };

    return Shape;

  })();

  Square = (function(_super) {
    __extends(Square, _super);

    function Square() {
      return Square.__super__.constructor.apply(this, arguments);
    }

    Square.prototype.computeArea = function() {
      return Math.pow(this.width, 2);
    };

    return Square;

  })(Shape);

  Circle = (function(_super) {
    __extends(Circle, _super);

    function Circle() {
      return Circle.__super__.constructor.apply(this, arguments);
    }

    Circle.prototype.radius = function() {
      return this.width / 2;
    };

    Circle.prototype.computeArea = function() {
      return Math.PI * Math.pow(this.radius(), 2);
    };

    return Circle;

  })(Shape);

  showArea = function(shape) {
    if (!(shape instanceof Shape)) {
      throw new Error('showArea requires a Shape instance!');
    }
    return console.log(shape.computeArea());
  };

  showArea(new Square(2));

  showArea(new Circle(2));

}).call(this);

//# sourceMappingURL=4-43.js.map
