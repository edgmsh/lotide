const assert = require('assert');
const countOnly   = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

describe("#countOnly", () => {
  it("returns Jason for for value 1", () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  it("returns Fang for for value 2", () => {
    assert.strictEqual(result1["Fang"], 2);
  });
  it("returns Agouhanna for for value undefined", () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });
});