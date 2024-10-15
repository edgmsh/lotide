const doPigLatin = function(str) {
  let letter = str[0];
  return str.substring(1) + letter + "ay";
};

for (let j = 2; j < process.argv.length; j++) {
  console.log(doPigLatin(process.argv[j]));
}
