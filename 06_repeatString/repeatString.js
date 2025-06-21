const repeatString = function(word, num) {
  let resulet = ""

  for (let i = 0; i < num; i++) {
    resulet += word;
  }

  if (num < 0) 
  {
    resulet = "ERROR";
  }

  return resulet
};

// Do not edit below this line
module.exports = repeatString;
