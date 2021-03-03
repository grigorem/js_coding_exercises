const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
} = require("../challenges/exercise007");

describe("sumDigits", () => {
  test("returns the sum of the numbers that are divisible by 3 or 5", () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(115)).toBe(7);
    expect(sumDigits(-512)).toBe(-8);
  });

  test("if the array is empty or does not contain multiples of 3 or 5", () => {
    expect(sumDigits(0)).toBe(0);
  });
});