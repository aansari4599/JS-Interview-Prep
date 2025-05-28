// https://namastedev.com/practice/shuffle
function shuffle(array) {
  // Your implementation

  const ans = array.slice(); // shallow copy
  if (array.length == 0) return [];
  for (let idx = ans.length - 1; idx >= 0; idx--) {
    let swapIndex = Math.floor(Math.random() * idx + 1);
    [ans[idx], ans[swapIndex]] = [ans[swapIndex], ans[idx]];
  }
  return ans;
}

module.exports = shuffle;
