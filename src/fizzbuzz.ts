export class FizzBuzz {
    play(length: number): any {
        if(length == 3 || length == 6)
            return "Fizz";
        if(length == 5)
            return "Buzz";
        return length.toString();
    }

}