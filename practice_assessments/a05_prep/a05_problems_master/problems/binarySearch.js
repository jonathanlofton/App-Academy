function comparator(a, b) {
  if (a < b) {
    return -1;
  } else if (b < a) {
    return 1;
  } else {
    return 0;
  }
}

Array.prototype.myBsearch = function(target) {

}

console.log([1,2,3,4,5].myBsearch(2) ); // 1
console.log([1,2,3,4,5].myBsearch(5)); // 4
console.log([1,2,3,4,5].myBsearch(6)); // -1
