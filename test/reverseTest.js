const assert = require('chai').assert;
const reverse   = require('../reverse');

describe("#reverse", () => {

  it("returns olleh", () => {
    assert.strictEqual(reverse('hello'),'olleh');
  });
});