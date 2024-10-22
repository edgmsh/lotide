const countLetters = function(inString) {
  let allLetters = {};
  let lettersArr = [];
  if (inString === "") {
    return allLetters;
  } else {
    lettersArr = inString.split(" ").join("").split(''); // spaces removed and converted to Array
    for (let oneLetter of lettersArr) {
    if (allLetters[oneLetter]) {
        allLetters[oneLetter] += 1;
      } else {
        allLetters[oneLetter] = 1;
      }
    }
  }
  return allLetters;
};
module.exports = countLetters;