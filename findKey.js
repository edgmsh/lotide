const findKey = function(inObj, callback) {
  for (let key in inObj) {
    if (callback(inObj[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;
