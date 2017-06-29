Array.prototype.myEach = function(callback) {

  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

let x = function(el) {console.log( 2 * el);};

[1,2,3,4].myEach(x);


Array.prototype.myMap = function(callback) {
  let array = [];
  for (let i = 0; i < this.length; i++) {
    array.push(callback(this[i]));
  }
  return array;
};

let y = (el => el * 2); //does implicit reutnr

let y2 = function(el) {
  return el * 2 ;
};

console.log([1,2,3,4].myMap(y2));


Array.prototype.myReduce = function(callback, initialValue) {

  let arr = this;

  // set initialValue if not given
  // remove that element from array
  if (!initialValue) {
    initialValue = arr[0];
    arr = arr.slice(1);
  }

  let result = initialValue;


  arr.myEach(el => result = callback(result, el));

  return result;
};

console.log([1,2,3,4,5,6].myReduce((total, item) => total * item));
