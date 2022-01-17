export class FizzBuzz {
    game(length: number): any {
        return this.play(length);
    }

    play(length: number): any {
        if(length % 15 == 0)
            return "FizzBuzz";
        if(length % 3 == 0)
            return "Fizz";
        if(length % 5 == 0)
            return "Buzz";
        return length.toString();
    }

}