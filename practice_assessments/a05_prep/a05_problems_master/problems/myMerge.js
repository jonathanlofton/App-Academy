//so basically, override the key if obj1 key exists, other wise tack it on the end;

function myMerge(obj1, obj2) {
  Object.keys(obj2).forEach(function(key) {
    obj1[key] = obj2[key];
  });
  return obj1;
}

const obj1 = {a: 1, b:2, c:3 };
const obj2 = {a: 1, b:2, d:4 };
console.log(myMerge(obj1, obj2));
