const {sum, subtract} = require('./sum')

test('properly adds two numbers', ()=>{
    expect(sum(1,2)).toBe(3)
})

test('properly subtracts two numbers', ()=>{
    expect(subtract(1,2)).toBe(-1)
})