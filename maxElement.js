// https://namastedev.com/practice/findmaxnumber
function findMaxNumber(arr) {
  // Your implementation
  if (arr.length <= 0) return null;
  let result = arr.reduce((acc, elem) => {
    if (acc < elem) return elem;
    else return acc;
  }, arr[0]);
  return result;
}

//For the purpose of user debugging.
findMaxNumber([1, 2, 3, 4, 5]);

module.exports = findMaxNumber;
