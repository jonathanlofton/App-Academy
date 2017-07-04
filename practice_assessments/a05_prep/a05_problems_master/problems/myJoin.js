// Add your own myJoin to the ArrayClass. If no arg is given,
// set the seperator to "".



Array.prototype.myJoin = function (seperator) {
  let result = this[0];
  if (seperator === undefined) {
    seperator = "";
  }

  for (var i = 1; i < this.length; i++) {
    result += seperator;
    result += this[i]
  }

  return result;
};

console.log([1,2,3].myJoin());
console.log(["javascript","is","weird"].myJoin(" "));
