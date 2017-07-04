// Write a curriedSum function that takes an integer (how many numbers
// to sum) and returns a function that can be successively called with
// single arguments until it finally returns a sum. That is:

function curriedSum(numArgs) {
  const numbers = [];

  // dont use ... because all of the args are separated?
  // like ()()()() instead of like arg1, arg2, etc...
  function _curry (args) {
    numbers.push(args)
    if (numbers.length === numArgs) {
      let sum = 0;
      for (var i = 0; i < numArgs; i++) {
        sum += numbers[i];
      }
      return sum;
    }
    // keep calling _curry to grab the next arg until it has
    // the amount that is wanted to perform the function
    return _curry;
  }

  // this is to actually call the function?
  // how else would it know to perform this function?
  return _curry;
}


const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56
