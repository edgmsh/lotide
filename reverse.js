const reverse = function(str) {
  let r = "";
  for (let i = str.length - 1; i >= 0; i--) {
    r += str.charAt(i);
  }
  return r;
};

for (let j = 2; j < process.argv.length; j++) {
  console.log(reverse(process.argv[j]));
}
