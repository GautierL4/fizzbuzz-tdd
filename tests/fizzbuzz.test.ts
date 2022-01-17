import { FizzBuzz } from "../src/fizzbuzz"

describe('Fizz Buzz Game', () => {
    it('should return first number', () => {
        let fizzBuzz = new FizzBuzz();
        expect(fizzBuzz.play(1)).toEqual("1");
    })
})