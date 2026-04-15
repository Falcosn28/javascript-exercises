const contains = function(obj, find) {

  return Object.keys(obj).some(key => {
    if (obj[key] === find) return true
    else if (Number.isNaN(find) && Number.isNaN(obj[key])) return true
    else if (typeof obj[key] === "object" && obj[key] !== null) return contains(obj[key], find)
    return false
  })

};
  
// Do not edit below this line
module.exports = contains;

