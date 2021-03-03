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

describe("getScreentimeAlertList", () => {
  test("test the normal cases", () => {

    let users = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
            { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
            { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
            { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
            { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
        ]
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
            { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
            { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
            { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
            { date: "2019-05-02", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 200} },
        ]
      },
    ];

    expect(getScreentimeAlertList(users, "2019-05-04")).toStrictEqual(["beth_1234"]);
    expect(getScreentimeAlertList(users, "2019-05-02")).toStrictEqual(["beth_1234", "sam_j_1989"]);
    expect(getScreentimeAlertList(users, "2019-05-06")).toStrictEqual([]);
    expect(getScreentimeAlertList(users, "2019-05-01")).toStrictEqual([]);
  });

  test("test weird cases", () => {
    expect(getScreentimeAlertList([], "2019-05-04")).toStrictEqual([]);
  });
});