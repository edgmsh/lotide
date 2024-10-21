const assert = require('assert');
const head   = require('../head');

describe("#head", () => {
  it("returns 5 for [5, 2, 3]", () => {
    assert.strictEqual(head([5, 2, 3]), 5);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});