//Hint: quicksort checks by pivoting!
//Hint 2: The solution is a bit different than the solution in Ruby!


Array.prototype.quickSort = function (comparator) {
  if (comparator === undefined) {
    const comparator = function (a, b) {
      if (a > b) {
        return 1;
      } else if (a < b){
        return -1;
      } else {
        return 0;
      }
    }
  }
  if (this.length < 2) {
    return this;
  }

  let pivot = this[0];
  let left = [];
  let right = [];

  for (var i = 1; i < this.length; i++) {
    if (comparator(this[i], pivot) === -1) {
      left.push(this[i]);
    } else {
      right.push(this[i])
    }
  }

  return left.quickSort(comparator).concat(pivot, right.quickSort(comparator));

};

// this call back is essentially the prc we would pass in ruby.

const compA = (a,b) => {
  if (a > b) {
    return 1;
  } else if (a < b){
    return -1;
  } else {
    return 0;
  }
};

const test = [7,3,5,2,8,1,9,3,4].quickSort(compA);
console.log(test);
