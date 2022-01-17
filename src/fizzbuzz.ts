export class FizzBuzz {
    game(length: number): string {
        let gameResult: string = "";
        for(let i :number = 1; i <= length; i++)
            gameResult += this.play(i);
        return gameResult;
    }

    play(length: number): string {
        if(length % 15 == 0)
            return "FizzBuzz";
        if(length % 3 == 0)
            return "Fizz";
        if(length % 5 == 0)
            return "Buzz";
        return length.toString();
    }

}