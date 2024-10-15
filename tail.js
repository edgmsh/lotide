const assertEqualArr = function(array1, array2) {
  if (array1.length !== array2.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
      }
    }
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(inArray) {
  let tmpArray = inArray.slice(0);
  if (typeof tmpArray === "undefined" || tmpArray.length === 0) {
    return undefined;
  } else {
    tmpArray.shift();
    return tmpArray;
  }
};

let result = tail(["Hello","Lighthouse","Labs"]);

assertEqual(result.length,2);
// new function for comparison of two arrays
assertEqualArr(result, ["Lighthouse","Labs"]); // new solution for arrays only
assertEqualArr(result, ["Lighthouse","Labs","Something"]);
assertEqualArr(result, []);
// workaround for still using the original assertEqual function
assertEqual(result.toString(), ["Lighthouse","Labs"].toString());

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
