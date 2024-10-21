const { tail, assertEqualArr } = require("../tail");
const assertEqual = require("../assertEqual");

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