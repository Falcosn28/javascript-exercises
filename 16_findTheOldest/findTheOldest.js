const findTheOldest = function(people) {
  let nextAge
  let age
  const currDate = new Date().getFullYear()
  people.sort((a, b) => 
    {
      age = a.yearOfDeath ? a.yearOfDeath - a.yearOfBirth : age = currDate - a.yearOfBirth
      nextAge = b.yearOfDeath ? b.yearOfDeath - b.yearOfBirth : nextAge = currDate - b.yearOfBirth
      return nextAge - age
    })
    return people[0]
};

// Do not edit below this line
module.exports = findTheOldest;
