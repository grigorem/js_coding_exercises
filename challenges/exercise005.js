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

  // make the swap if the length of the array is more or equal with 2
  if (arr.length >= 2) {
    let aux = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = aux;
  }

  // return modified/unmodified array
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  // iterate over each property in the object
  for (let prop in haystack) {
    // filter inherited properties
    if (Object.prototype.hasOwnProperty.call(haystack, prop)) {
      // if the property is a string, check if includes the string
      if (typeof haystack[prop] === "string" && haystack[prop].toLowerCase().includes(searchTerm.toLowerCase())) {
        return true;
      }
    }
  }

  // if nothing found return false
  return false;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");

  // declare the empty output class
  let freq = {};

  // use a regular expression to isolate words from sentences
  let words = str.toLowerCase().match(/[a-z]+(?:-[a-z]+)?/g)

  // use forEach function to iterate over each match found and count it
  words.forEach((word) => {
    if (word in freq) {
      freq[word]++;
    } else {
      freq[word] = 1;
    }
  });

  // return the created class
  return freq;
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
