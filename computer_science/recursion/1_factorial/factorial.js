const factorial = function(n, total = 1) {
  if (n == 0) {
    return total
  }
  else if (!Number.isInteger(n) || n < 0) {
    return undefined
  }
  else {
    return factorial(n - 1, total * n)
  }


};

// Do not edit below this line
module.exports = factorial;