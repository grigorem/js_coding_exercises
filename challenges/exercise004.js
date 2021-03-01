function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  // use a filter and a lambda expression to get the numbers smaller than 1
  return nums.filter((num) => num < 1);
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  // use a filter and a lambda expression to get the names that start with char
  return names.filter((name) => name[0] === char);
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");

  // use a filter and a lambda expression to filter the strings starting with "to "
  return words.filter((word) => word.startsWith("to "));
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  // use a filter and a lambda expression to get the integers from the array
  return nums.filter((num) => num % 1 === 0);
}

function getCities(users) {
  if (!users) throw new Error("users is required");

  // use the map function and a lambda expression to return the cities
  return users.map((user) => user.data.city.displayName);
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  // use the map function and a lambda expression to get the square root
  return nums.map((num) => Math.round(Math.sqrt(num) * 100) / 100);
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  // use a filter and a lambda expression to check which sentences contain the str
  return sentences.filter((sentence) => sentence.toLowerCase().includes(str.toLowerCase()));
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
