const findKeyByValue = function(inObj, inVal) {
  for (let key in inObj) {
    if (inObj[key] === inVal) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;