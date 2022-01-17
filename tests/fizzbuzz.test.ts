import { FizzBuzz } from "../src/fizzbuzz"

describe('Childrens are playing FizzBuzz Game', () => {
    let fizzBuzz: FizzBuzz;
    
        beforeEach(() => {
            fizzBuzz = new FizzBuzz();
        })
    
    describe('Childrens are playing by saying one word', () => {
        
        it('should return first number', () => {
            expect(fizzBuzz.play(1)).toEqual("1");
        })
    
        it('should return second number', () => {
            expect(fizzBuzz.play(2)).toEqual("2");
        })
    
        it('should return fizz for 3', () => {
            expect(fizzBuzz.play(3)).toEqual("Fizz");
        })
    
        it('should return buzz for 5', () => {
            expect(fizzBuzz.play(5)).toEqual("Buzz");
        })
    
        it('should return fizz for 6', () => {
            expect(fizzBuzz.play(6)).toEqual("Fizz");
        })
    
        it('should return buzz for 10', () => {
            expect(fizzBuzz.play(10)).toEqual("Buzz");
        })
    
        it('should return fizzbuzz for 15', () => {
            expect(fizzBuzz.play(15)).toEqual("FizzBuzz");
        })
        
    })

    describe('Childrens are playing multiple numbers', () => {

        it('should return only first number for warm up', () => {
            expect(fizzBuzz.game(1)).toEqual("1");
        })

        it('should return only two first number for warm up', () => {
            expect(fizzBuzz.game(2)).toEqual("12");
        })

        it('should return first 15 value to show an example of the game', () => {
            expect(fizzBuzz.game(15)).toEqual("12Fizz4BuzzFizz78FizzBuzz11Fizz1314FizzBuzz");
        })


    })
})





