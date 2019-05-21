let filler = require("../src/arrayFillSequentialGenerator").filler;
function cycle(...args) {
  let [x,y] = [...args]
  //let els = xs;
  /*let els = typeof y === 'undefined' ? [x] : [...filler(x,y)]*/
  let els = Array.isArray(x) ? x : typeof y === 'undefined' ? [x] : [...filler(x,y)]
  //let els = Array.isArray(xs) ? xs : [xs];
  let index = 0;
  return {
    /*[Symbol.iterator]: function* (){      
      let _n = 0
      while ( _n < els.length){
        yield els[_n]
        _n++
      }
   },*/
    next: function() {
      if (index === els.length)
        // cycle
        index = 0;
      return { value: els[index++], done: false };
    }
  };
}

function take(n, xs) {
  //let it = typeof xs.next === 'undefined' ? makeIterator(xs) : xs
  let it = xs;
  let taken = [];
  let nxt;
  while (n > 0) {
    if ((nxt = it.next()).done) return taken;
    taken.push(nxt.value);
    n--;
  }
  return taken;
}

function repeatPattern(xs, n) {
  let repeated = [];
  for (var i = 1; i <= n; i++) {
    repeated.push(...xs);
  }
  return repeated;
}

function repeatPattern2(xs, n) {
  let times = xs.length * n;
  return take(times, cycle(xs));
}

function cycleThroughPattern(xs, n) {
  return take(n, cycle(xs));
}

function cycleThroughNumberPattern(x,y, n) {
  return take(n, cycle(x,y));
}

var same = (el, n) => take(n, cycle(el));

module.exports = {
  cycle: cycle,
  repeatPattern: repeatPattern,
  repeatPattern2: repeatPattern2,
  cycleThroughPattern: cycleThroughPattern,
  cycleThroughNumberPattern: cycleThroughNumberPattern,
  same: same
};
