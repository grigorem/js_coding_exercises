function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");

  // return the requested property
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");

  // return the requested comparison
  return person.city === "Manchester";
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");

  // return the number of people divided by 40, rounded up
  return Math.ceil(people / 40);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");

  // user filter function and lambda functions to count the sheep
  return arr.filter((elem) => elem === "sheep").length;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");

  // return true if postCode starts with "M", false otherwise + check if city is "Manchester"
  return person.address.postCode.startsWith("M") && person.address.city === "Manchester";
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
