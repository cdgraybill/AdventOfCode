import { parseToStrings } from "../Helpers/InputParser.js";

var input = parseToStrings("ProblemInputs/2022/Day09Input.txt");

function day09Part01() {
    var answer = 1; // starts at one to account for starting position

    //current plan: log a series of coordinates in an array, then count all unique coordinates
    var allPositions = [];
    var currentPosition = [0, 0];
    var tempPosition = [];

    for (let i = 0; i < input.length; i++) {
        var direction = input[i][0];
        var numberOfSteps = parseInt(input[i][2]);

        switch (direction) {
            case "L":
                break;

            case "R":
                for (let j = 0; j < numberOfSteps - 1; j++) {
                    currentPosition[1]++;
                    tempPosition = currentPosition;
                    allPositions.push(tempPosition);
                    tempPosition.length = 0;
                }
                break;

            case "U":
                break;

            case "D":
                break;
        }
    }

    return allPositions;
}

console.log(day09Part01());