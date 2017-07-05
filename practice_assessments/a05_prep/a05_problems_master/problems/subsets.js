const subSets = (arr) => {
  if (arr.length === 0) {
    return [[]];
  }

  const first = arr[0];
  const subset = subSets(arr.slice(1))

  const newSubs = subset.map((sub) => {[first].concat(sub)})

  return subset.concat(newSubs);

};

console.log(subSets([1,2,3]));
//[ [], [ 3 ], [ 2 ], [ 2, 3 ], [ 1 ], [ 1, 3 ], [ 1, 2 ], [ 1, 2, 3 ] ]
