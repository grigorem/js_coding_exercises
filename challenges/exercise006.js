/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");

  // filter multiples of 3 and 5
  let multiples = arr.filter((num) => num % 3 === 0 || num % 5 === 0)

  // treat the case of an empty array or no multiples
  if (multiples.length === 0) {
    return 0;
  }

  // sum elements with reduce function
  return multiples.reduce((a, b) => a + b);
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");

  // use a regular expression to match the DNA characters
  return /^[cgta]*$/gi.test(str);
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");

  // split the string in an array of characters
  let dnas = str.toLowerCase().split("");

  // use the map function and "translate" each character in its complementary
  return dnas.map((dna) => {
    if (dna === "a") return "T";
    if (dna === "t") return "A";
    if (dna === "c") return "G";
    if (dna === "g") return "C";
  }).join("");
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");

  /* Implement 6k + 1 method to validate a prime number - algorithm from Wikipedia */

  // special cases
  if (n === 2 || n === 3) {
    return true;
  }
  if (n <= 1) {
    return false;
  }

  // eliminate most of the options
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  // iterate on the rest of the numbers
  for (let i = 5; i <= Math.sqrt(n); i += 6) {
    if (n % i === 0 || n % i + 2 === 0) {
      return false
    }
  }

  // that means the number is prime
  return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");

  // applied naive approach with two FORs to form the matrix
  let out = [];
  for (let i = 0; i < n; i++) {
    let line = [];
    for (let j = 0; j < n; j++) {
      line[j] = fill;
    }
    out[i] = line;
  }

  return out;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");

  return staff.filter((person) => person.rota.includes(day)).length >= 3;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
