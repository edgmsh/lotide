const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let vipList = {};
  if (typeof allItems === "undefined" || allItems.length === 0 ||
    Object.keys(itemsToCount).length === 0) {
    return vipList;
  } else {
    for (let firstName of allItems) {
      if (Object.prototype.hasOwnProperty.call(itemsToCount, firstName) && itemsToCount[firstName]) {
        if (Object.prototype.hasOwnProperty.call(vipList, firstName)) {
          vipList[firstName] += 1;
        } else {
          vipList[firstName] = 1;
        }
      }
    }
  }
  return vipList;
};

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

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
