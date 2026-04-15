const totalIntegers = function(counter, intCount = 0) {

  if (typeof counter !== "object" || counter === null) {
    return 
  }
  
  if (typeof counter === "object") {
    counter = Object.values(counter)
  }

  counter.forEach(value => {
    if (Number.isInteger(value)) {
      intCount++
    }
    else if (Array.isArray(value) || typeof value === 'object' && value !== null) {
      intCount += totalIntegers(value)
    }
  })
  return intCount

};
  
// Do not edit below this line
module.exports = totalIntegers;
