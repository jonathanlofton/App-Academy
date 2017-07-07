const subSets = (arr) => {
  if (arr.length === 0) {
    return [[]];
  }

  const first = arr[0];
  const newsub = subSets(arr.slice(1));

  const gucci = newsub.map(sub =>  [first].concat(sub))

  return newsub.concat(gucci);
};

console.log(subSets([1,2,3]));
//[ [], [ 3 ], [ 2 ], [ 2, 3 ], [ 1 ], [ 1, 3 ], [ 1, 2 ], [ 1, 2, 3 ] ]
