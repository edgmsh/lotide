const countLetters = require("../countLetters");
const assert = require('assert');

describe("#countLetters", () => {
  let countObj = {};
  countObj = countLetters("Hello");
  it("returns 2 for number of l in Hello", () => {
    assert.strictEqual(countObj["l"], 2);
  });
  it("returns 1 for number of o in Hello", () => {
    assert.strictEqual(countObj["o"], 1);
  });
});

