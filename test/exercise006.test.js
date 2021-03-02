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

describe("isValidDNA", () => {
  test("returns true and false for two strings", () => {
    expect(isValidDNA("CGTAATGC")).toBe(true);
    expect(isValidDNA("TAATGCB")).toBe(false);
  });

  test("test for special cases", () => {
    expect(isValidDNA("")).toBe(true);
    expect(isValidDNA("BDEMFR")).toBe(false);
  });
});

describe("getComplementaryDNA", () => {
  test("test for normal case", () => {
    expect(getComplementaryDNA("CGTAATGC")).toBe("GCATTACG");
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
  });

  test("test for special cases", () => {
    expect(getComplementaryDNA("")).toBe("");
    expect(getComplementaryDNA("cTGAt")).toBe("GACTA");
  });
});

describe("isItPrime", () => {
  test("test for normal case", () => {
    expect(isItPrime(23)).toBe(true);
    expect(isItPrime(17)).toBe(true);
    expect(isItPrime(27)).toBe(false);
    expect(isItPrime(1721)).toBe(true);
    expect(isItPrime(123213213247)).toBe(true);
    expect(isItPrime(123213213248)).toBe(false);
  });

  test("test for special cases", () => {
    expect(isItPrime(1)).toBe(false);
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(0)).toBe(false);
    expect(isItPrime(-1)).toBe(false);
  });
});