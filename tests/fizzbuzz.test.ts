import { FizzBuzz } from "../src/fizzbuzz"

describe('Childrens are playing by saying one word', () => {
    let fizzBuzz: FizzBuzz;

    beforeEach(() => {
        fizzBuzz = new FizzBuzz();
    })

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

})