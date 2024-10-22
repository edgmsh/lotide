const assert = require('assert');
const letterPositions   = require('../letterPositions');

/*
  H: [ 0 ],
  e: [ 1, 8, 10 ],
  l: [ 2, 3 ],
  o: [ 4 ],
  t: [ 6 ],
  h: [ 7 ],
  r: [ 9 ]
*/

const result1 = letterPositions("Hello there");

describe("#letterPositions", () => {
  it("returns 'e' for [1, 8, 10]", () => {
    assert.deepEqual(result1["e"], [1, 8, 10]);
  });
  it("returns 'l' for [2, 3]", () => {
    assert.deepEqual(result1["l"], [2, 3]); 
  });
});