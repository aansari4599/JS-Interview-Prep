// https://namastedev.com/practice/reversewords
function reverseWords(sentence) {
  // Your implementation
  let words = sentence.split(" ");
  let ans = [];
  for (let word of words) {
    let temp = word.split("").reverse().join("");
    ans.push(temp);
  }

  return ans.join(" ");
}

module.exports = reverseWords;
