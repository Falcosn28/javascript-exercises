const removeFromArray = function(arr, ...rm) {
  for (const delet of rm) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === delet) {
        arr.splice(i, 1)
        i--
      }
    }
  }
  return arr
};

// Do not edit below this line
module.exports = removeFromArray;
