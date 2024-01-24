import { parseToStrings } from "../Helpers/InputParser.js";

var input = parseToStrings("ProblemInputs/2022/Day09Input.txt");

function day09Part01() {
    var answer = 1; // starts at one to account for starting position
    var grid = [];

    for (let i = 0; i < input.length; i++) {
        var direction = input[i][0];
        var numberOfSteps = parseInt(input[i][2]);

        switch (direction) {
            case "L":
                break;
            case "R":
                grid[0][numberOfSteps - 1] = "H"
                break;
            case "U":
                break;
            case "D":
                break;
        }


    }
}

console.log(day09Part01());