const assert = require('assert');
const without   = require('../without');

describe("#without", () => {
  it("returns [ 2, 3]", () => {
    assert.deepEqual(without([1, 2, 3], [1]),[2, 3]);
  });
  it("returns ['1','2']", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"]); 
  });
});
