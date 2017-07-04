// return the first n prime numbers.

const isPrime = (num) => {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};



const primes = (n) => {
  let list = [];
  let i = 0;
  while (list.length < n) {
    if (isPrime(i)) {
      list.push(i);
    }
    i ++;
  }

  return list;
};

console.log(primes(10));
