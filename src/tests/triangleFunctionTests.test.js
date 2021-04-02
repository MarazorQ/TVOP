const equilateral = require('./triangleFunctionTests.js')
const noTriangle = require('./triangleFunctionTests.js')
const versatile = require('./triangleFunctionTests.js')
const isosceles = require('./triangleFunctionTests.js')

test('equilateral should return true or false of 3 values', () =>{
    expect(equilateral(3,3,3)).toBe(true)
    expect(equilateral(4,4,4)).toBe(true)
    expect(equilateral(4,4,1)).toBe(true)
})

test('noTriangle should return true or false of 3 values', () =>{
    expect(noTriangle(3,3,3)).toBe(true)
    expect(noTriangle(1,2,3)).toBe(true)
    expect(noTriangle(1,2,3)).toBe(true)
})

test('versatile should return true or false of 3 values', () =>{
    expect(versatile(2,3,4)).toBe(true)
    expect(versatile(3,3,3)).toBe(false)
    expect(versatile(3,3,3)).toBe(true)
})

test('isosceles should return true or false of 3 values', () =>{
    expect(isosceles(2,2,1)).toBe(true)
    expect(isosceles(4,2,2)).toBe(true)
    expect(isosceles(3,3,3)).toBe(true)
})
