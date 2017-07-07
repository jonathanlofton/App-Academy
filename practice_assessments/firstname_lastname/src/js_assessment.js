// write String.prototype.mySlice. It should take a start index and an
// (optional) end index.
String.prototype.mySlice = function (start, end) {
  if (end < start) {
    return "";
  }
  const resultArray = [];

  end = end || this.length;


  for (var i = start; i < end; i++) {
    resultArray.push(this[i])
  }

  return resultArray.join("");
}
// write Array.prototype.myReduce (analogous to Ruby's Array#inject).
Array.prototype.myReduce = function(callback, acc) {
  acc = acc || this[0]

  for (var i = 1; i < this.length; i++) {
    acc =  callback(acc, this[i]);
  }

  return acc;
}
// write Array.prototype.quickSort(comparator). Here's a quick refresher if
// you've forgotten how quickSort works:
//   - choose a pivot element from the array (usually the first)
//   - for each remaining element of the array:
//     - if the element is less than the pivot, put it in the left half of the
//     array.
//     - otherwise, put it in the right half of the array.
//   - recursively call quickSort on the left and right halves, and return the
//   full sorted array.
Array.prototype.quickSort = function(comparator) {
  comparator = comparator || function(a, b) {
    if (a < b) {
      return -1;
    } else if (b < a) {
      return 1;
    } else {
      return 0;
    }
  }



  let pivot = this[0];
  const left = [];
  const right =[];

  if (this.length < 2) {
    return this;
  } else {
    for (var i = 1; i < this.length; i++) {
      if (comparator(this[i], pivot) === -1) {
        left.push(this[i]);
      } else {
        right.push(this[i]);
      }
    }
  }

  return left.quickSort(comparator).concat(pivot, right.quickSort(comparator));
}
// write myFind(array, callback). It should return the first element for which
// callback returns true, or undefined if none is found.
function myFind(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array[i];
    }
  }
}

// write sumNPrimes(n)
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function sumNPrimes(n) {
  const primeList =[];
  let i = 2;
  while (primeList.length < n) {
    if (isPrime(i)) {
      primeList.push(i);
    }
    i += 1;
  }

  let total = 0;
  primeList.forEach((num) => { total += num ;})
  return total;
}

// write Function.prototype.myBind.
Function.prototype.myBind = function (ctx, ...bindArgs) {
  return (...callArgs) => {
    return this.apply(ctx, bindArgs.concat(callArgs))
  }
}

// write Function.prototype.inherits.
Function.prototype.inherits = function (parent) {
  this.prototype = Object.create(parent.prototype)
  this.prototype.constructor = this;
}
