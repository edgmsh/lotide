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

const flatten = function(inArray) {

  if (inArray.length === 0) {
    return [];
  }
  let tmpArray = inArray.slice(0);
  let outArray = [];
  for (let i = 0; i < tmpArray.length; i ++) {
    if (Array.isArray(tmpArray[i])) {
      for (let x = 0; x < tmpArray[i].length; x ++) {
        outArray.push(tmpArray[i][x]);
      }
    } else {
      outArray.push(tmpArray[i]);
    }
    
  }
  return outArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]
