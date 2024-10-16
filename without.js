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

const without = function(source, itemsToRemove) {
  let tmpArray = source.slice(0);
  if (tmpArray.length > 0 && typeof itemsToRemove === "string" && tmpArray.includes(itemsToRemove)) {
    for (let i = 0; i < tmpArray.length; i++) {
      if (tmpArray[i] === itemsToRemove) {
        tmpArray.splice(i, 1);
      }
    }
  } else if (tmpArray.length > 0 && itemsToRemove.length > 0) {
    for (let x = 0; x < itemsToRemove.length; x++) {
      if (tmpArray.includes(itemsToRemove[x])) {
        tmpArray = tmpArray.filter(e => e !== itemsToRemove[x]);
      }
    }
  }
  return tmpArray;
};

assertArraysEqual(without([1, 2, 3], [1]),[2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"]);
assertArraysEqual(without(["1", "2", "4"], "4"),["1", "2"]);
assertArraysEqual(without(["1", "2", "3"], []),["1", "2","3"]);


