// https://namastedev.com/practice/implement-curry
function curry(fn) {
  // Your implementation
  return function curried(...args) {
    if (args.length < fn.length) {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    } else {
      return fn(...args);
    }
  };
}

module.exports = curry;
