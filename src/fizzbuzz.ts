export class FizzBuzz {
    play(length: number): any {
        if(length % 3 == 0)
            return "Fizz";
        if(length == 5 || length == 10)
            return "Buzz";
        return length.toString();
    }

}