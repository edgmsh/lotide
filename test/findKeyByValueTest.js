const assert = require('assert');
const findKeyByValue   = require('../findKeyByValue');

const bestTVShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

describe("#findKeyByValue", () => {
  it("returns 5 for [5, 2, 3]", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); 
  });
});