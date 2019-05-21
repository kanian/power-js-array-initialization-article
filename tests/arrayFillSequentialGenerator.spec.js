let arrayFillSequential = require('../src/arrayFillSequential')
let fillTo = require('../src/arrayFillSequentialGenerator').fillTo
let fill = require('../src/arrayFillSequentialGenerator').fill

describe("fillTo:", () => {
  it("should create an array of the given length", () =>{
    expect(fillTo(10).length).toEqual(10)
  })

  it("should fill the array with sequential numbers", () => {
    expect(fillTo(10)).toEqual([1,2,3,4,5,6,7,8,9,10])
  })
})

describe("fill:", () => {
  it("should create an array of the given length", () =>{
    expect(fill(1,10).length).toEqual(10)
  })

  it("should fill the array with sequential numbers", () => {
    expect(fill(-1,10)).toEqual([-1,0,1,2,3,4,5,6,7,8,9,10])
  })
})
