

function sum () {
  let temp = Array.prototype.slice.call(arguments);
  let total = 0;

  for (let i = 0; i < temp.length; i++) {
    total += temp[i];
  }
  return total;
}


// console.log(sum(1, 2, 3, 4));
// sum(1, 2, 3, 4, 5);


function sum2 (...args) {
  let total = 0;

  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}


// console.log(sum(1, 2, 3, 4, 123));

// const myBind = function(object, callback) {
//   // Making and invoking a function that takes in an object and function
//   // Associate that object with the method
//   callback(object);
// };

// Animal.class




class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}



Function.prototype.myBind = function(context) {
  console.log(`${this}`);
  return () => this.apply(context);
};

// methodName.myBind(object);
// adding myBind to the function prototype, myBind will take
// and
Function.prototype.myBind = function (objectContext, ...bindArgs) {
  // console.log(`${this}`);
  return (...callArgs) => {
    return this.apply(objectContext, bindArgs.concat(callArgs));
  };
};




const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(breakfast, "meow", "Kush")();
// Breakfast says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "me"
markov.says.myBind(breakfast, "heypay")("meow", "a tree");
// Breakfast says meow to a tree!
// true

// Function.prototype.curry = function (num) {
//   return
//
//   if (num) {
//
//   }
// };


let curriedSum = function(numArgs) {
  let numbers = [];

  function _curriedSum (num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      let total = 0;

      numbers.forEach(el => { total += el; } );

      return total;
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;
};

// const test = curriedSum(5);

// curriedSum is setting max num of
// args to 5
// const test1 = curriedSum(5);
// // we are adding nums to a bank
// // until it reaches the above num
// // and then it return the sum
// const test2 = test1(1);
// const test3 = test2(3);
// console.log(test3);
// test(1)(2)(3)(3)(5);

Function.prototype.curry = function (num) {
  const numArgs = [];
  let fn = this;

  function _curry (nextNum) {
    numArgs.push(nextNum);
    if (numArgs.length === num) {
      return fn.call(null, ...numArgs);
    } else {
      return _curry;
    }
  }

  return _curry;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}
let test9 = sumThree.curry(3)(4)(20)(6);
console.log(test9);
