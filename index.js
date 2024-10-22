// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqObjects = require('./eqObjects');
const countLetters = require('./countLetters');
const eqArrays = require('./eqArrays');
const findKey = require('./findKey');
const countOnly = require('./countOnly');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  eqObjects: eqObjects,
  countLetters: countLetters,
  eqArrays: eqArrays,
  findKey: findKey,
  countOnly: countOnly,
  findKeyByValue: findKeyByValue,
  letterPositions: letterPositions,
  without: without,
};
