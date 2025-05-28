// https://namastedev.com/practice/find-missing-number

// approach 1
function findMissingNumber(nums) {
  // Your implementation
  let arr = nums.sort();
  let n = arr.length;
  let ans = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i] != i) {
      ans = i;
      break;
    }
  }
  if (ans == -1) ans = arr.length;
  return ans;
}

//For the purpose of user debugging.
findMissingNumber([3, 0, 1]);

module.exports = findMissingNumber;

// appraoch 2
function findMissingNumber(nums) {
  // Your implementation
  let sum = 0;
  nums.forEach((item) => {
    sum += item;
  });

  let expectedSum = (nums.length * (nums.length + 1)) / 2;
  return expectedSum - sum;
}

//For the purpose of user debugging.
findMissingNumber([3, 0, 1]);

module.exports = findMissingNumber;
