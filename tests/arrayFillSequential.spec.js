let arrayFillSequential = require('../src/arrayFillSequential')


describe("arrayFillSequential:", () => {
  it("should create an array of the given length", () =>{
    expect(arrayFillSequential(1,10).length).toEqual(10)
  })

  it("should fill the array with sequential numbers", () => {
    expect(arrayFillSequential(2,10)).toEqual([2,3,4,5,6,7,8,9,10])
  })
})
