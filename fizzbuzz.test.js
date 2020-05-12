function fizzBuzz(a){
    if (a === 3){
        return 'fizz'
    } 
    if (a === 5){
        return 'buzz'
    }
return a;
}


test('1 is 1', ()=>{
    expect(fizzBuzz(1)).toBe(1)
})

test('2 is 2', ()=>{
    expect(fizzBuzz(2)).toBe(2)
})

test('3 is fizz', ()=>{
    expect(fizzBuzz(3)).toBe('fizz')
})

test('5 is buzz', ()=>{
    expect(fizzBuzz(5)).toBe('buzz')
})