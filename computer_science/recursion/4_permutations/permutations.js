const permutations = function(arr, result = [], n = arr.length) {

  if (n === 0) {
    result.push(arr.slice())
    return result
  }

  if (n === 1) {
    result.push(arr.slice())
    return result
  }
  else{
    
    for (let i = 0; i < n; i++) {
      permutations(arr, result, n - 1)

      if (n % 2 === 0) {
        [arr[i], arr[n - 1]] = [arr[n - 1], arr[i]];
      } else {
        [arr[0], arr[n - 1]] = [arr[n - 1], arr[0]];
      }
      
    }
  }

  return result

};
  
// Do not edit below this line
module.exports = permutations;
