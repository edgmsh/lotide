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
