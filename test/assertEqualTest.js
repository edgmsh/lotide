const assertEqual = require("../assertEqual");
const head = require("../head");

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 1);
assertEqual(1, 5);

assertEqual(head([5, 6, 7]), 5);
assertEqual(head([5, 6, 7]), 9);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hi");
assertEqual(head([]), "Hello");