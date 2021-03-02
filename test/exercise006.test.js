const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
} = require("../challenges/exercise006");

describe("sumMultiples", () => {
  test("returns the sum of the numbers that are divisible by 3 or 5", () => {
    expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
    expect(sumMultiples([4, 22, 654, 123, 65, 23, 40, 1])).toBe(882);
  });

  test("if the array is empty or does not contain multiples of 3 or 5", () => {
    expect(sumMultiples([1, 2, 4, 7, 8])).toBe(0);
    expect(sumMultiples([])).toBe(0);
  });
});