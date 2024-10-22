const assert = require('assert');
const eqObjects   = require('../eqObjects');


const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

describe("#eqObjects", () => {
  it("{ color: 'red', size: 'medium' } for { size: 'medium', color: 'red' }", () => {
    assert.strictEqual(eqObjects(shirtObject, anotherShirtObject), true);
  });
  it("{ color: 'red', size: 'medium' } for { size: 'medium', color: 'red', sleeveLength: 'long' }", () => {
    assert.strictEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
  });
});



