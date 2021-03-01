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

  // initiate the total with "0"
  let total = 0;

  // use the "forEach" function and a lambda function to count all the subjects
  people.forEach((person) => total += person.subjects.length);

  return total;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  // initialize result with "false"
  let hasIngredient = false;

  // iterate over each dish in menu and check if it has the ingredient with "includes" function
  menu.forEach((dish) => hasIngredient = hasIngredient || dish.ingredients.includes(ingredient));

  return hasIngredient;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  // make the intersection between the two arrays
  let intersection = arr1.filter(value => arr2.includes(value));

  // remove duplicates and sort the array
  return intersection.filter((value, index, self) => self.indexOf(value) === index).sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
