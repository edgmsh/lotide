const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(inString) {
  let allLetters = {};
  let lettersArr = [];
  if (inString === "") {
    return allLetters;
  } else {
    lettersArr = inString.split(" ").join("").split(''); // spaces removed and converted to Array
    for (let oneLetter of lettersArr) {
      if (Object.prototype.hasOwnProperty.call(allLetters, oneLetter)) {
        allLetters[oneLetter] += 1;
      } else {
        allLetters[oneLetter] = 1;
      }
    }
  }
  return allLetters;
};

const result1 = countLetters("Hello there");

assertEqual(result1["l"], 2);
assertEqual(result1["z"], undefined);
assertEqual(result1["o"], 1);
assertEqual(result1["i"], undefined);
assertEqual(result1["e"], 3);