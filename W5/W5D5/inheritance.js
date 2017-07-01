Function.prototype.inherits = function (object) {
  function Surrogate() {}
  Surrogate.prototype = object.prototype;
  this.prototype = new Surrogate;
  this.prototype.constructor = this;
};
//
// function MovingObject (speed, direction, size) {
//   this.speed = speed;
//   this.direction = direction;
//   this.size = size;
// }
//
// function Ship (color, smell, taste, disesases) {
//   this.color = color;
//   this.smell = smell;
//   this.taste = taste;
//   this.disesases = disesases;
// }
//
// Ship.inherits(MovingObject);
//
// function Asteroid (aliens, holes) {
//   super(MovingObject)
//   this.aliens = aliens;
//   this.holes = holes;
// }
//
// Asteroid.inherits(MovingObject);
//
// let dodo = new Asteroid('Bob', "craters");
// let rara = new Asteroid('Fred', "moon-ish");
//
// let shippy = new Ship('Bob', "craters");
// let shiper = new Ship('Fred', "moon-ish");

function Dog (name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + " barks!");
};

function Corgi (name) {
  Dog.call(this, name);
}

Corgi.inherits(Dog);

Corgi.prototype.waddle = function () {
  console.log(this.name + " waddles!");
};

const blixa = new Corgi("Blixa");
blixa.bark();
blixa.waddle();
