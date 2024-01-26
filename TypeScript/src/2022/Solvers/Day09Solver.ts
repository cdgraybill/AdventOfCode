import { parseToStrings } from "../Helpers/InputParser.js";

var input = parseToStrings("ProblemInputs/2022/Day09Input.txt");

function day09Part01() {
    var answer = 1; // starts at one to account for starting position

    //plan: log a series of coordinates in an array, then count all unique coordinates
    //current task: figuring out the correct algorithim for each case
    
    var allPositions = [];

    var xPositionTail = 0;
    var yPositionTail = 0;

    var xPositionHead = 0;
    var yPositionHead = 0;

    for (let i = 0; i < input.length; i++) {
        var direction = input[i][0];
        var numberOfSteps = parseInt(input[i][2]);

        switch (direction) {
            case "L":
                xPositionHead -= numberOfSteps;

                for (let j = 0; j < numberOfSteps - 1; j++) {
                    xPositionTail--;
                    allPositions.push([xPositionTail, yPositionTail]);
                }
                break;

            case "R":
                xPositionHead += numberOfSteps;

                if ((xPositionHead - yPositionTail) > 1) {
                    for (let j = 0; j < numberOfSteps - 1; j++) {
                        xPositionTail++;
                        allPositions.push([xPositionTail, yPositionTail]);
                    }
                }
                
                break;

            case "U":
                yPositionHead += numberOfSteps;

                if ((yPositionHead - xPositionTail) > 1) {
                    for (let j = 0; j < numberOfSteps - 1; j++) {
                        yPositionTail++;
                        allPositions.push([xPositionTail, yPositionTail]);
                    }
                }

                break;

            case "D":
                yPositionHead -= numberOfSteps;
                
                for (let j = 0; j < numberOfSteps - 1; j++) {
                    yPositionTail--;
                    allPositions.push([xPositionTail, yPositionTail]);
                }
                break;
        }
    }

    return allPositions;
}

console.log(day09Part01());