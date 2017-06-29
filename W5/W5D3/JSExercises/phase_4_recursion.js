let range = function(start, end) {
 if (start === end) {
   return [];
 }

 let result = (range(start, end - 1 ));
   result.push(end - 1);
   return result;
};


console.log(range(1, 3));

let sumRec = function(arr) {
  if (arr.length === 0) {
    return [];
  }

  let first = arr[0];
  let summedArr = first + sumRec(arr.slice(1, arr.length));
  return summedArr;
};


console.log(sumRec([1,2,3,4]));



let fibonacci = function(number) {

  if (number <= 2 ) {
    return [0, 1].slice(0, number);
  }

  let fibArr = fibonacci(number - 1);
  fibArr.push(fibArr[fibArr.length - 2] + fibArr[fibArr.length - 1]);
  return fibArr;
};


console.log(fibonacci(1));


// def fib(n)
//   return [0,1].take(n) if n <= 2
//
//   array = fib(n - 1)
//   array += [array[-2] + array[-1]]
// end
//
// p fib(5)


let bsearch = function(arr, target) {
  if (arr.length === 0) {
    return -1;
  }

  let mid = Math.floor(arr.length / 2);

  if (arr[mid] === target ) {
    return mid; //index

  } else if ( arr[mid] > target ) {

     let subAnswer =  bsearch(arr.slice(mid + 1), target);
     return (subAnswer === -1) ? -1 : (mid + 1) + subAnswer;

  } else if (arr[mid] < target ) {
    return  bsearch(arr.slice(0, mid - 1), target);
  }
};



console.log(bsearch([1,2,3,4,5,6,7,8,9,10,11], 7));



let mergesort = function(arr)  {
  if (arr.length === 1 ) {
    return arr;
  }

  let mid = arr.length / 2;

  let left = mergesort(arr.split(0, mid));
  let right = mergesort(arr.split((mid + 1), arr.length - 1));

  merge(left, right);
};


let merge = function(left, right) {
  let merged = [];

  if (left[0] > right[0]) {
    merged.push(right[0]);
  } else {
    merged.push(left[0]);
  }

  merged.concat(left);
  merged.concat(right);

  return merged;
};
