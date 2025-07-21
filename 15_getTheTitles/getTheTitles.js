const getTheTitles = function(books) {
  let resulet = []
  for (let i = 0; i < books.length; i++) {
    resulet.push(books[i].title)
  }
  return resulet
};

// Do not edit below this line
module.exports = getTheTitles;
