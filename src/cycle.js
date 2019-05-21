let filler = require("../src/arrayFillSequentialGenerator").filler;
function cycle(...args) {
  let [x, y] = [...args];
  let els = Array.isArray(x)
    ? x
    : typeof y === "undefined"
    ? [x]
    : [...filler(x, y)];
  let index = 0;
  return {
    [Symbol.iterator]: function*() {
      let _n = 0;
      while (_n < els.length) {
        yield els[_n];
        _n++;
      }
    },
    next: function() {
      if (index === els.length)
        // cycle
        index = 0;
      return { value: els[index++], done: false };
    }
  };
}



module.exports = cycle