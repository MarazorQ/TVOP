const equilateral, noTriangle, versatile, isosceles = require('./triangleFunctionTests')

//jest function
test('equilateral should return true or false of 3 values', () =>{
    expect(equilateral(3,3,3)).toBe(true)
    expect(equilateral(3,3,4)).toBe(false)
})

test('noTriangle should return true or false of 3 values', () =>{
    expect(noTriangle(3,3,3)).toBe(false)
})

test('versatile should return true or false of 3 values', () =>{
    expect(versatile(3,3,3)).toBe(true)
})

test('isosceles should return true or false of 3 values', () =>{
    expect(isosceles(3,3,3)).toBe(true)
})
