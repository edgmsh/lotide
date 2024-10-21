const middle = function(inArray) {
  let tmpArray = inArray.slice(0);
  let outArray = [];
  let index = 0;
  if (typeof tmpArray === "undefined" || tmpArray.length <= 2) {
    return outArray;
  } else {
    if (tmpArray.length % 2 !== 0) {
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

module.exports = middle;

  