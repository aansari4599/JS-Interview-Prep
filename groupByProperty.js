// https://namastedev.com/practice/groupbyarr-key
function groupBy(arr, key) {
  // Your implementation
  return arr.reduce((acc, elem) => {
    if (!acc.hasOwnProperty(elem[key])) {
      acc[elem[key]] = [];
    }
    acc[elem[key]].push(elem);
    return acc;
  }, {});
}
groupBy(
  [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
  ],
  "age"
);
module.exports = groupBy;
