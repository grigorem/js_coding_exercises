function capitalize(word) {
  if (word === undefined) throw new Error("word is required");

  // isolate first character of the string, capitalize it and append the rest of the string
  return word[0].toUpperCase() + word.substring(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  // isolate first character from each word, separate them with "." and return
  return firstName[0] + "." + lastName[0];
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (vatRate === undefined) throw new Error("vatRate is required");

  // calculate the price with the VAT added to it
  let priceWithVat = originalPrice + originalPrice * (vatRate / 100);

  // return the price with VAT rounded to two decimals
  return Math.round(priceWithVat * 100) / 100;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  // calculate the price with the reduction added to it
  let priceWithReduction = originalPrice - originalPrice * (reduction / 100);

  // return the price with the reduction rounded to two decimals
  return Math.round(priceWithReduction * 100) / 100;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  // check if it is even or odd and return the middle character(s)
  if (str.length % 2 === 0) {
    return str.substring(str.length / 2 - 1, str.length / 2 + 1);
  } else {
    return str.substring(Math.ceil(str.length / 2) - 1, Math.ceil(str.length / 2));
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");

  // split all characters, revers the order in array and join them back (ASCII only)
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
