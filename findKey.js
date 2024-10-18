const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(inObj, callback) {
  let tmpObj = {};
  tmpObj = inObj;
  for (let key in tmpObj) {
    if (callback(tmpObj[key])) {
      return key;
    }
  }
  return undefined;
};


let obj =
{
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
}; // => "noma"

assertEqual(findKey(obj,(x) => x.stars === 2), "noma");
