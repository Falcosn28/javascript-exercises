const sumAll = function(num01, num02) {
  let arr = []
  let lower
  let higer

  if (!Number.isInteger(num01) || !Number.isInteger(num02) || num01 < 0 || num02 < 0) {return "ERROR"}
  if (num01 > num02) {lower = num02; higer = num01}
  else if (num01 < num02) {lower = num01; higer = num02}

  while (lower <= higer) {
    arr.push(lower)
    lower++
  }
  return arr.reduce((sum, cur) => sum + cur);
};

// Do not edit below this line
module.exports = sumAll;
