import { FizzBuzz } from "../src/fizzbuzz"

describe('Fizz Buzz Game', () => {
    it('should return first number', () => {
        let fizzBuzz = new FizzBuzz();
        expect(fizzBuzz.play(1)).toEqual("1");
    })

    it('should return second number', () => {
        let fizzBuzz = new FizzBuzz();
        expect(fizzBuzz.play(2)).toEqual("2");
    })

})