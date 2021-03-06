let randomNumberSequence = require('../src/ramdomFiller')
let take = require('../src/take')
let cycle = require('../src/cycle')

let filter = (fn, xs) => xs.filter(fn);
let unique = (x, index, xs) => xs.indexOf(x) === index;
let filterUnique = xs => filter(unique, xs);

describe("randomNumberSequence", () => {
  it("should return a random sequence of unique numbers", () => {
    let rand = randomNumberSequence(1,30,10)
    expect(filterUnique(rand).length).toEqual(rand.length)
  })
})


