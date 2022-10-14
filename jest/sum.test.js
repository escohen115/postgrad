const {sum, subtract, cloneArray} = require('./sum')

test('properly adds two numbers', ()=>{
    expect(sum(1,2)).toBe(3)
})

test('properly subtracts two numbers', ()=>{
    expect(subtract(1,2)).toBe(-1)
})

test('properly clones array', ()=>{
    expect(cloneArray([1,2,3])).toEqual([1,2,3])
})