// https://namastedev.com/practice/arrayprototypereduce
Array.prototype.myReduce = function (callback, initialValue) {
  // Your implementation
  if (this == null) throw new TypeError("called on null or undefined array");
  if (typeof callback !== "function")
    throw new TypeError("callback not a function");

  const arr = Object(this);
  const len = arr.length;
  let i = 0;
  let accumulator;
  if (arguments.length >= 2) {
    accumulator = initialValue;
  } else {
    while (i < len && !(i in arr)) i++;
    if (i >= len)
      throw new TypeError("Reduce of empty array with no initial value");
    accumulator = arr[i++];
  }

  for (; i < len; i++) {
    if (i in arr) accumulator = callback(accumulator, arr[i], i, arr);
  }

  return accumulator;
};
