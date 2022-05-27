exports.creditCheck = function (Str) {
  let arr = [];
  Str = Str.toString().split("").reverse();
  for (let i in Str) {
    if (i % 2 !== 0) {
      arr.push(+Str[i] * 2);
    } else {
      arr.push(+Str[i]);
    }
  }
  for (let j in arr) {
    if (arr[j] > 9) {
      let bigger = arr[j].toString().split("");
      arr[j] = +bigger[0] + +bigger[1];
    }
  }
  let res = arr.reduce((curr, pre) => curr + pre, 0);
  return res % 10 == 0 ? "The number is valid!" : "The number is invalid!";
};
