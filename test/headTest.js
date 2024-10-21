/*
const head = require("../head");
const assertEqual = require("../assertEqual");

assertEqual(head([5, 6, 7]), 5);
assertEqual(head([5, 6, 7]), 9);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hi");
assertEqual(head([]), "Hello");
*/

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