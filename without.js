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
        for (let i = 0; i < tmpArray.length; i++) {
          if (tmpArray[i] === itemsToRemove[x]) {
            tmpArray.splice(i, 1);
          }
        }
      }
    }
  }
  return tmpArray;
};

module.exports = without;
