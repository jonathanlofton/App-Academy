function comparator (a, b) {
  if (a < b) {
    return -1;
  } else if (a > b {
    return 1;
  } else {
    return 0
  }
}


function myBsearch(array, target) {
  let mid = Math.floor(array.length / 2);
  if (array.length === 0) {
    return -1;
  }

  let left = array.slice(0, mid);
  let right = array.slice(mid + 1);

  if (array[mid] < target) {
    let final = myBsearch(right, target);
    return final === -1 ? -1 : final + 1 + mid;
  } else if (array[mid] > target) {
    return myBsearch(left, target);
  } else {
    return mid;
  }
}

console.log(myBsearch([1,2,3,4,5], 2) ); // 1
console.log(myBsearch([1,2,3,4,5], 5)); // 4
console.log(myBsearch([1,2,3,4,5], 6)); // -1
