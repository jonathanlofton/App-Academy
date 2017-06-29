Array.prototype.bubbleSort = function() {
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < (this.length - 1); i++) {
        if (this[i] > this[i + 1]) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
          sorted = false;
        }
      }
    }
  return this;
};


console.log([3,6,3,2,1].bubbleSort());


String.prototype.subStrings = function() {
  let substring = [];

  for (let i = 0; i < this.length ; i++) {
    for (let j = 1; i + j <= this.length; j++) {

      substring.push(this.substr(i, j));
    }
  }
  return substring;
};


console.log("abc".subStrings());
