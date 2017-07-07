const exponent = (b, n) => {
  if (n === 0) {
    return 1;
  } else {
    return b * exponent(b, n - 1)
  }
};

console.log(exponent(3,3)); // 27
