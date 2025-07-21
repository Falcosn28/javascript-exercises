const fibonacci = function(num) {
  if (num < 0) {return "OOPS"}
  else{ 
    let array = [0, 1]
    for (let i = 2; i <= num; i++) {
      array[i] = array[i - 1] + array[i - 2]
    }
    return array[num]
  }
};

// Do not edit below this line
module.exports = fibonacci;
