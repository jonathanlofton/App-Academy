
//----------------------------
// Using Surrogates
//----------------------------

Function.prototype.inherits1 = function (BaseClass) {
  function surrogate () {};
  surrogate.prototype = BaseClass.prototype;
  this.prototype = new surrogate;
  surrogate.prototype.constructor = this;
};


//----------------------------
// Using Object.Create
//----------------------------

// After you have written Function.prototype.inherits
// using the surrogate trick, refactor your solution using
// Object.create. Make sure to test that your updated solution works.

Function.prototype.inherits2 = function (BaseClass) {
  // creating a new object is similar to using a surrogate
  // we want to use a surrogate so we don't have
  // this.prototype = BaseClass.prototype which means that
  // if you added a method to this.prototype it would also
  // add it the BaseClass.prototype when we actually want them to // mutually exclusive.
  this.prototype = Object.create(BaseClass.prototype);
  this.prototype.constructor = this;
};

//----------------------------
// Test
//----------------------------


function Dog (name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + " barks!");
};

function Corgi (name) {
  Dog.call(this, name);
}

Corgi.inherits2(Dog); // change to inherits2 to test your second method

Corgi.prototype.waddle = function () {
  console.log(this.name + " waddles!");
};

const blixa = new Corgi("Blixa");
blixa.bark();
blixa.waddle();
