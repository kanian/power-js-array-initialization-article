let take = require('../src/take')
let cycle = require('../src/cycle')

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

function cycleThroughNumberPattern(x, y, n) {
  return take(n, cycle(x, y));
}

var same = (el, n) => take(n, cycle(el));
module.exports = {
  repeatPattern: repeatPattern,
  repeatPattern2: repeatPattern2,
  cycleThroughPattern: cycleThroughPattern,
  cycleThroughNumberPattern: cycleThroughNumberPattern,
  same: same
};
