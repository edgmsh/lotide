const countOnly = function(allItems, itemsToCount) {
  let vipList = {};
  if (typeof allItems === "undefined" || allItems.length === 0 ||
    Object.keys(itemsToCount).length === 0) {
    return vipList;
  } else {
    for (let firstName of allItems) {
      if (Object.prototype.hasOwnProperty.call(itemsToCount, firstName) && itemsToCount[firstName]) {
        if (Object.prototype.hasOwnProperty.call(vipList, firstName)) {
          vipList[firstName] += 1;
        } else {
          vipList[firstName] = 1;
        }
      }
    }
  }
  return vipList;
};

module.exports = countOnly;
