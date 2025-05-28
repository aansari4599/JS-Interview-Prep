// https://namastedev.com/practice/remove-duplicates-from-array
function removeDuplicates(arr) {
  // your code here
  const set = new Set();
  const result = [];
  //   arr.forEach((element, index) => {
  //     if (set.has(element)) {
  //       arr.splice(index, 1);
  //     } else {
  //       set.add(element);
  //     }
  //   });
  // return arr;

  arr.forEach((element) => {
    if (!set.has(element)) {
      set.add(element);
      result.push(element);
    }
  });

  return result;
}
removeDuplicates([1, 2, 2, 3, 4, 4]);
module.exports = removeDuplicates;
