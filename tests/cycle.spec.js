let repeatPattern = require('../src/utils').repeatPattern
let repeatPattern2 = require('../src/utils').repeatPattern2
let cycleThroughPattern = require('../src/utils').cycleThroughPattern
let cycleThroughNumberPattern = require('../src/utils').cycleThroughNumberPattern
let same = require('../src/utils').same

describe("repeatPattern:", () => {
  it("should allow for repeating a pattern an arbitrary number of times", () =>{
    let n = 2
    expect(repeatPattern([1,2,3],n)).toEqual([1,2,3,1,2,3])
  })
})

describe("repeatPattern2:", () => {
  it("should allow for repeating a pattern an arbitrary number of times", () =>{
    let n = 2
    expect(repeatPattern2([1,2,3],n)).toEqual([1,2,3,1,2,3])
  })
})

describe("cycleThroughPattern:", () => {
  it("should allow for cycling through a pattern an arbitrary number of times", () =>{
    let n = 7
    expect(cycleThroughPattern([1,2,3],n)).toEqual([1,2,3,1,2,3,1])
  })
})


describe("cycleThroughNumberPattern:", () => {
  it("should allow for cycling through a sequence of numbers an arbitrary number of times", () =>{
    let n = 7
    let x = 2
    let y = 5
    expect(cycleThroughNumberPattern(x,y,n)).toEqual(cycleThroughPattern([2,3,4,5],n))
  })
})

describe("same:", () => {
  it("should allow for cycling through a pattern an arbitrary number of times", () =>{
    let n = 7
    let el = 1
    expect(same(el,n)).toEqual((new Array(n)).fill(el))
  })
})