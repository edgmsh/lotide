const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1,array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const letterPositions = function(inString) {
  let allLetters = {};
  if (inString === "") {
    return allLetters;
  } else {
    for (let i = 0; i < inString.length; i++) {
      if (inString[i] !== " ") {
        if (allLetters[inString[i]]) {
          allLetters[inString[i]].push(i);
        } else {
          allLetters[inString[i]] = [i];
        }
      }
    }
  }
  return allLetters;
};

//console.log(letterPositions("Hello there"));
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

assertArraysEqual(result1["e"], [1, 8, 10]);
assertArraysEqual(result1["r"], [9]);
assertArraysEqual(result1["l"], [2, 3]);