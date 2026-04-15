const pascal = function(n, output = [1]) {

  let count = []

  if (n === 1) {
    return output
  }

  count.push(...output)
  count.push(0)
  count.unshift(0)

  output = []

  for (let i = 0; i < count.length - 1; i++) {

    output.push(count[i] + count[i + 1])

  }

  return pascal(n - 1, output)
  
};
  
// Do not edit below this line
module.exports = pascal;
