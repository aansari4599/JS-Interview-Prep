// https://namastedev.com/practice/sum

function sum(...args) {
  // Your implementation
  let sum = 0;
  args.forEach((item) => (sum += item));

  return sum;
}

//For the purpose of user debugging.
sum(100, 200, 300, 400);

module.exports = sum;
