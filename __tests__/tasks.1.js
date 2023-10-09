const rewire = require("rewire");
const fs = require("fs")

beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));

describe("1. Rewrite using ternary operator", () => {
  test("Correct result is printed to the console", () => {
    const solution = rewire("../solution");
    const result = solution.__get__("result");
    expect(result).toEqual(expect.stringMatching(/over/i));
  });
});
describe("2. Rewrite using ternary operator", () => {
  test("Correct result is printed to the console", () => {
    const solution = rewire("../solution");
    const msg = solution.__get__("msg");
    expect(msg).toEqual(expect.stringMatching(/you need more points to beat the highscore/i));
  });
});
describe("3. Rewrite using ternary operator", () => {
  test("Correct result is printed to the console", () => {
    const solution = rewire("../solution");
    const message = solution.__get__("message");
    expect(message).toEqual(expect.stringMatching(/greetings/i));
  });
});
describe("Ternary operator", () => {
  test("In all 3 tasks ternary operator is used instead of `if/else`", () => {
    const solution = fs
    .readFileSync("./solution.js")
    .toString("utf-8")
    expect(solution.match(/.{1,}[\s\S]{0,1}\?.*:[\s\S]{0,1}.{1,}/gm).length).toBeGreaterThanOrEqual(3)
  });
});