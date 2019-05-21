
function take(n, xs) {
  let it = typeof xs.next === "undefined" ? makeIterator(xs) : xs;
  let taken = [];
  let nxt;
  while (n > 0) {
    if ((nxt = it.next()).done) return taken;
    taken.push(nxt.value);
    n--;
  }
  return taken;
}


module.exports = take
