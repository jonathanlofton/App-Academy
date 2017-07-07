// Implement a method that finds the sum of the first n
// fibonacci numbers recursively. Assume n > 0

const fibSum = (num) => {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  }

  return fibSum(num - 1) + fibSum(num - 2) + 1;

};
console.log(fibSum(5)); // [1,1,2,3,5] === 12
