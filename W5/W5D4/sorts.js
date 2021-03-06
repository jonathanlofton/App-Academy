function bsearch(array, target) {

  if (array.length === 0) {
    return -1;
  }

  let mid = Math.floor(array.length / 2);

  let left = array.slice(0, mid);
  let right = array.slice(mid + 1);


  if (array[mid] === target) {
    return mid;
  }
  else if (array[mid] > target ) {
    let temp = bsearch(left, target);
    return temp === -1 ? -1 : temp + 1 + mid
  }
  else if (array[mid] < target) {
    return bsearch(right, target);
  }
};


console.log(bsearch([1,2,3,4,5,5,7,8,9], 1));
