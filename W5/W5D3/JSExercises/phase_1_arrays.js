Array.prototype.uniq = function() {

  let uniqueArray = [];

  for (let i = 0; i < this.length; i++) {
    if (uniqueArray.indexOf(this[i]) === -1) { //index of return -1 if not found
    // element doesnt exist in the array
    uniqueArray.push(this[i]);
    }
  }

  return uniqueArray;
};
Array.prototype.twoSum = function() {
  let emptyArray = [];

  for(let i = 0; i < this.length; i++) {
    for (let j = i + 1; j <this.length; j++) {
    if (this[i] + this[j] === 0)  {
    emptyArray.push([i, j]);
      }
    }
  }

  return emptyArray;
};

Array.prototype.twoSum2 = function() {
  let pairs = [];
  const indexHash = {};

  this.forEach((el, idx) => {
    if (indexHash[el * -1]) {
      const newPairs = indexHash[el * -1].map((prevIdx) => [prevIdx, idx]);

      // remember, concat doesn't mutate the original object
      pairs = pairs.concat(newPairs);
    }

    // since we can't set a default attribute value in JavaScript,
    // we will need to check for existence first
    indexHash[el] ? indexHash.push(idx) : indexHash[el] = [idx];
  });

  return pairs;
};

console.log([-1, 0, 2, -2, 1].twoSum2());


Array.prototype.transpose = function() {

  let columns = Array.from(
    { length: this[0].length },
    () => Array.from({ length: this.length})
  );

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[i].length; j++) {
      columns[j][i] = this[i][j];
    }
  }


};







var myVar = [1,2,2,2,2,3,4,5,6];
console.log([1, 1, 2, 2, 3, 3, 4, 4, 5, 5].uniq());
console.log([1, -5, 2, 2, 3, 3, 4, 4, 5, 5].twoSum());
// console.log(myVar.uniq());
// myVar.uniq();
