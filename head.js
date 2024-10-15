const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(inArray) {
  if (typeof inArray === "undefined" || inArray.length === 0) {
    return undefined;
  } else {
    return inArray[0];
  }
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head([5, 6, 7]), 9);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hi");
assertEqual(head([]), "Hello");


