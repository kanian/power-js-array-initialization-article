let repeatPattern = require('../src/cycle').repeatPattern
let repeatPattern2 = require('../src/cycle').repeatPattern2
let cycleThroughPattern = require('../src/cycle').cycleThroughPattern
let sames = require('../src/cycle').sames

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

describe("sames:", () => {
  it("should allow for cycling through a pattern an arbitrary number of times", () =>{
    let n = 7
    let el = 1
    expect(sames(el,n)).toEqual((new Array(n)).fill(el))
  })
})