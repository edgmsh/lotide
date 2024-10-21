//const assertEqual = require("./assertEqual");

const head = function(inArray) {
  if (typeof inArray === "undefined" || inArray.length === 0) {
    return undefined;
  } else {
    return inArray[0];
  }
};

module.exports = head;


