const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
} = require("../challenges/exercise007");

describe("sumDigits", () => {
  test("test the normal cases", () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(115)).toBe(7);
    expect(sumDigits(-512)).toBe(-8);
  });

  test("test the weird cases", () => {
    expect(sumDigits(0)).toBe(0);
  });
});

describe("createRange", () => {
  test("test the normal cases", () => {
    expect(createRange(3, 11, 2)).toStrictEqual([3, 5, 7, 9, 11]);
    expect(createRange(0, 5)).toStrictEqual([0, 1, 2, 3, 4, 5]);
    expect(createRange(10, 55, 10)).toStrictEqual([10, 20, 30, 40, 50]);
  });

  test("test weird cases", () => {
    expect(createRange(0, 0)).toStrictEqual([0]);
    expect(createRange(1, 0)).toStrictEqual([]);
  });
});