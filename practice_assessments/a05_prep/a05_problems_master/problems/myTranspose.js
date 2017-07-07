Array.prototype.myTranspose = function () {
  let result = [];
  let finalResult = [];
  for (let i = 0; i < this.length; i++) {
    result = [];
    for (var j = 0; j < this[i].length; j++) {
      result.push(this[j][i]);
    }
    finalResult.push(result);
  }
  return finalResult;
};

console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].myTranspose());
//[ [ 0, 3, 6 ], [ 1, 4, 7 ], [ 2, 5, 8 ] ]
