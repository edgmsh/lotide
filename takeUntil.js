const takeUntil = function(a, callback) {
  const i = a.findIndex(x => !callback(x));
  return i >= 0 ? a.slice(0, i) : a;
};
    
module.exports = takeUntil;
