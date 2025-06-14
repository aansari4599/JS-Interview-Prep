// https://namastedev.com/practice/debounce
function debounce(fn, delay) {
  // Your implementation
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

//For the purpose of user debugging.
//pass appropriate input in below function call
debounce();

module.exports = debounce;
