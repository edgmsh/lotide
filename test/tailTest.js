const assert = require('assert');
const tail   = require('../tail');

describe("#head", () => {
  let result = tail(["Hello","Lighthouse","Labs"]);
  it("returns ['Lighthouse','Labs'] for ['Hello','Lighthouse','Labs']", () => {
    assert.deepEqual(result, ["Lighthouse","Labs"]);
  });
});
