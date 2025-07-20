const palindromes = function (str) {
  const origin = str.replace(/[!., ]/g, '').toLowerCase().split("").join("")
  const reverse = origin.split("").reverse().join("")

  return origin == reverse ? true : false
};

// Do not edit below this line
module.exports = palindromes;
