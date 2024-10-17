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

const middle = function(inArray) {
  let tmpArray = inArray.slice(0);
  let outArray = [];
  let index = 0;
  if (typeof tmpArray === "undefined" || tmpArray.length <= 2) {
    return outArray;
  } else {
    if (tmpArray.length % 2 !== 0){
      index = Math.floor(tmpArray.length / 2);
      outArray[0] = tmpArray[index];
    } else {
      index = tmpArray.length / 2;
      outArray[0] = tmpArray[index - 1];
      outArray[1] = (tmpArray[index]);
    }
    return outArray;
  }
};

assertArraysEqual(middle([1]),[]); // => []
assertArraysEqual(middle([1, 2]),[]); // => []
assertArraysEqual(middle([1, 2, 3]),[2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]); // => [3, 4]

  