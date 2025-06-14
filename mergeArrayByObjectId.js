// https://namastedev.com/practice/merge-array

// key concepts -> map, for..in, for..of, conversion to array
function mergeData(arr1, arr2) {
  // Your implementation
  const map = new Map();
  // console.log(arr1);
  for (let item of arr1) {
    map.set(item.id, { ...item });
  }
  for (let item of arr2) {
    if (map.has(item.id)) {
      map.set(item.id, { ...map.get(item.id), ...item });
    } else {
      map.set(item.id, { ...item });
    }
  }

  return Array.from(map.values());
}

//For the purpose of user debugging.
//pass your arrays in function call
// mergeData();

module.exports = mergeData;
