function fizzBuzz(a){
    if(isFizzBuzz(a)) {
        return 'fizzbuzz'
    }

    if (isFizz(a)){
        return 'fizz'
    } 
    if (isBuzz(a)){
        return 'buzz'
    }
  
  return a;
}

function isFizzBuzz(a){
    return isFizz(a) && isBuzz(a)
}

function isFizz(a){
    return a % 3 == 0
}

function isBuzz(a){
    return a % 5 == 0
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

test('6 is fizz', ()=>{
    expect(fizzBuzz(6)).toBe('fizz')
})

test('7 is 7', ()=>{
    expect(fizzBuzz(7)).toBe(7)
})

test('9 is fizz', ()=>{
    expect(fizzBuzz(9)).toBe('fizz')
})

test('10 is buzz', ()=>{
    expect(fizzBuzz(10)).toBe('buzz')
})

test('15 is fizzbuzz', ()=>{
    expect(fizzBuzz(15)).toBe('fizzbuzz')
})

test('30 is fizzbuzz', ()=>{
    expect(fizzBuzz(30)).toBe('fizzbuzz')
})
