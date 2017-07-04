// Write a method, `Array#two_sum`, that finds all pairs of positions where the
// elements at those positions sum to zero.
//
// NB: ordering matters. I want each of the pairs to be sorted smaller index
// before bigger index. I want the array of pairs to be sorted
// "dictionary-wise":
// [0, 2] before [1, 2] (smaller first elements come first)
// [0, 1] before [0, 2] (then smaller second elements come first)

Array.prototype.twoSum = function () {
  let pairedPos = [];

  for (let i = 0; i < this.length; i++) {
    for (var j = 1; j < this.length; j++) {
      if (j < i) {continue;}
      if (this[i] + this[j] === 0) {
        pairedPos.push([i, j]);
      }
    }
  }

  return pairedPos;
};

console.log([1,4,6,-1,7,3,-4].twoSum()); //[[0,3], [1,6]]
