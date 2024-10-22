const eqArrays   = require('./eqArrays');

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  let tmpObj1 = Object.keys(object1);
  let tmpObj2 = Object.keys(object2);
  if (!eqArrays(tmpObj1.sort(),tmpObj2.sort())) {
    return false;
  }

  for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key],object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;
