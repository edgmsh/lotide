const reverse = function(str) {
  let r = "";
  for (let i = str.length - 1; i >= 0; i--) {
    r += str.charAt(i);
  }
  return r;
};

module.exports = reverse;