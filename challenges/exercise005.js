const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  // get the index of the number in the numbers array
  let index = nums.findIndex((num) => num === n);

  // if the number is not found or is the last one, return null; return the next number otherwise
  if (index === -1 || index === nums.length - 1) {
    return null
  } else {
    return nums[index + 1];
  }
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");

  // split the string in an characters array
  let chars = str.split('');

  // return the object with the 1 and 0 count (using filter and lambda expression)
  return {
    1: chars.filter((char) => char === '1').length,
    0: chars.filter((char) => char === '0').length
  }
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");

  // initialize a variable for the output
  let reversedN = 0;

  // iterate over each digit of "n" and form the other number
  while (n > 0) {
    reversedN = reversedN * 10 + n % 10;
    n = Math.floor(n / 10);
  }

  return reversedN;
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");

  // declare the sum lambda expression as a variable
  let sumFunc = (a, b) => a + b;

  // return the sum of the sum of the arrays
  return arrs.map((arr) => arr.reduce(sumFunc)).reduce(sumFunc);
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
