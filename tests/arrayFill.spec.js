let arrayFill = require('../src/arrayFill')


describe("arrayFill:", () => {
  it("should create an array of the given length", () =>{
    expect(arrayFill(1,10).length).toEqual(10)
  })

  it("should fill the array with given element", () => {
    let el = 1
    expect(arrayFill(el,10).filter(x => x!== el)).toEqual([])
  })
})
