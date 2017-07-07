//Write a recursive method that returns the sum of all elements in an array
const recSum = (nums) => {
  if (nums.length === 0) {
    return 0;
  }

  let result = recSum(nums.slice(1)) + nums[0]
  return result;
};

console.log(recSum([5,45,7]));
