// https://namastedev.com/practice/flatten-nested-array

// approach 1
function flattenArray(arr) {
  // Your implementation
  const ans = [];
  flatten(arr, ans);
  return ans;
}
function flatten(arr, ans) {
  arr.forEach((elem) => {
    if (Array.isArray(elem)) {
      flatten(elem, ans);
    } else ans.push(elem);
  });
}

module.exports = flattenArray;

// approach 2

function flattenArray(arr) {
  return arr.reduce((acc, elem) => {
    Array.isArray(elem) ? acc.concat(flattenArray(elem)) : acc.concat(elem);
  }, []);
}

// approach 2
function flattenArray(arr) {
  let stack = [...arr];
  let result = [];

  while (stack.length) {
    let next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else result.unshift(next);
  }
  return result;
}
