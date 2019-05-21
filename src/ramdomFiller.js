function randomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function* randomFiller(min, max, n) {
  if(n > (max - min + 1)){ // it's mathematically impossible
    return undefined
  }
  let rands = [];
  let current;
  while (n > 0) {
    while (rands.indexOf((current = randomNumberInRange(min, max))) !== -1) {
      current = randomNumberInRange(min, max);
    }
    rands.push(current);
    n--;
  }
  yield rands;
}

function randomNumberSequence(min, max, n) {
  return randomFiller(min, max, n).next().value;
}

module.exports = randomNumberSequence;
