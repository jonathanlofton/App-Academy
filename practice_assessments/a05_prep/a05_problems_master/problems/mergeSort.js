//Write an Array#merge_sort method; it should not modify the original array.
// If a comparator is passed, it should sort according to that callback.


Array.prototype.mergeSort = function (comparator) {
  comparator = comparator || function(a, b) {
    if (a < b) {
      return -1;
    } else if (b < a) {
      return 1;
    } else {
      return 0;
    }
  }

  if (this.length < 2) {
    return this;
  }

  let mid = Math.floor(this.length / 2);
  let left = this.slice(0, mid).mergeSort(comparator);
  let right = this.slice(mid).mergeSort(comparator);

  return merge(left, right, comparator);
};

function merge(left, right, comparator) {
  let merged = [];

  while (left.length > 0 && right.length > 0) {
    if (comparator(left[0], right[0]) === -1) {
      merged.push(left.shift())
    } else {
      merged.push(right.shift())
    }
  }

  return merged.concat(left, right);
}




const compA = (b, a) => {
 if (a < b) {
   return -1;
 } else if (b < a) {
   return 1;
 } else {
   return 0;
 }
};

console.log([1,9,2,3,0,5,6,43,24].mergeSort(compA));
console.log([1,9,2,3,0,5,6,43,24].mergeSort()); // ONE WITH COMPARATOR
// console.log([1,9,2,3,0,5,6,43,24].mergeSort()); // ONE WITHOUT
