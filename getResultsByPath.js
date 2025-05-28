// https://namastedev.com/practice/get-result-by-path

function getResultByPath(path, obj) {
  //write your implementation here
  // let pathArray = path.split('.')
  // let n = pathArray.length
  const normalisedPath = path.replace(/\[(\d+)\]/g, ".$1");
  const keys = normalisedPath.split(".");

  let ans = obj;
  // let i = 0;
  // while (i<n) {
  //   ans = ans[JSON.parse(path[i])]
  //   i++
  // }
  for (let key of keys) {
    if (ans == undefined || ans == null) break;
    ans = ans[key];
  }
  return ans;
}
const path = "data.results.status";
const obj = {
  data: {
    results: {
      status: "completed",
      error: "",
    },
  },
};
getResultByPath(path, obj);
module.exports = getResultByPath;
