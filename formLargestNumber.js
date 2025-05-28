// https://namastedev.com/practice/larget-number-formed
/**
 *
 * @param {*} arr
 * solution approach:
 */
function formLargestNumber(arr) {
  //write your implementation here
  const nums = arr.map((item) => item.toString());
  nums.sort((a, b) => {
    return (b + a).localeCompare(a + b);
  });
  if (nums[0] == "0") return "0";
  return nums.join("");
}
const input = [0, 0];
formLargestNumber(input);
module.exports = formLargestNumber;
