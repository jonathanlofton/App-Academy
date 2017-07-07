// Monkey patch the Array class and add a myInject method.
// In the JS exercises, you are required to use myForEach.
// So make sure you can write this for forEach opposed to a for loop!

Array.prototype.myInject = function (cb) {
  // pop off the first el as accum
  let accum = this.shift();

  for (var i = 0; i < this.length; i++) {
    accum = cb(accum, this[i]);
  }

  return fibSum(n - 1) + fibSum(n - 2) + 1;
};


//tester callback
let test = [1,2,3,4].myInject(function(a,b){
  return a + b;
});
console.log(test);
