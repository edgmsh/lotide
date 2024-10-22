const assert = require('chai').assert;
const map   = require('../map');

describe("#map", () => {
  const words = ["ground", "control", "to", "major", "tom"];
  const results1 = map(words, (word) => word[0]);
  const results2 = map(words, (word) => word.length);
  it("returns [ 'g', 'c', 't', 'm', 't' ]", () => {
    assert.deepEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
  });
  it("returns [ 6, 7, 2, 5, 3 ]", () => {
    assert.deepEqual(results2, [ 6, 7, 2, 5, 3 ]);
  });
});