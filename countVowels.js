// https://namastedev.com/practice/count-vowels

function countVowels(str) {
  // Your implementation
  const vowelSet = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;
  str
    .toLowerCase()
    .split("")
    .forEach((char) => {
      if (vowelSet.has(char)) count++;
    });
  return count;
}

module.exports = countVowels;
