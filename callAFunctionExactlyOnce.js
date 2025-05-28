// https://namastedev.com/practice/oncefn

function once(fn) {
  // Your code here ...
  let result;
  let called = false;
  return function (...args) {
    if (!called) {
      try {
        result = fn.apply(this, args);
        called = true;
      } catch (e) {
        throw e;
      }
    }

    return result;
  };
}
module.exports = once;
