Array.prototype.bubbleSort = function(compare) {
  compare = compare || function(a, b) {
    if (a < b) {
      return -1;
    } else if (b < a) {
      return 1;
    } else {
      return 0;
    }
  }
  let sorted = false;
  while (!sorted) {
    sorted = true;

    for (var i = 0; i < this.length; i++) {
      if (compare(this[i], this[i + 1]) === 1) {
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
        sorted = false;
      }
    }


  }

  return this;
};



console.log([1,6,3,8,6,5,10].bubbleSort()); // [1,3,5,6,6,8,10]
