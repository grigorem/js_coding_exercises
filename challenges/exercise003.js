function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");

  // iterate over each number and compute its square
  for (let i = 0; i < nums.length; i++) {
    nums[i] = Math.pow(nums[i],2);
  }
  return nums;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  // save the first word as it is
  let result = words[0];

  // iterate over all words, starting with the 2nd, make the first letter as capital letter and append it to the result
  for (let i = 1; i < words.length; i++) {
    result += words[i][0].toUpperCase() + words[i].substring(1);
  }

  return result;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
