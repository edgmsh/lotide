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

const tail = function(inArray) {
  let tmpArray = inArray.slice(0);
  if (typeof tmpArray === "undefined" || tmpArray.length === 0) {
    return undefined;
  } else {
    tmpArray.shift();
    return tmpArray;
  }
};

module.exports = tail;
