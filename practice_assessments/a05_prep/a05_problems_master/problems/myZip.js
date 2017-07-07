Array.prototype.myZip = function (...arrays) {
  let result = [];
  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays.length; j++) {
      if (arrays[i][j] === undefined) {
        result.push(undefined);
      } else {
        result.push(newArray[i][j]);
      }
    }
  }
  return result;
};


console.log([1,2,3].myZip([4,5,6],[7,8,9])); // [[1,4,7], [2,5,8], [3,6,9]]
console.log([4,5,6].myZip([1,2], [8])); // [[4,1,8], [5,2, undefined], [6, undefined, undefined]]
