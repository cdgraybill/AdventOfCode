import { parseToStrings } from "../Helpers/InputParser.js";

var input = parseToStrings("ProblemInputs/2022/Day09Input.txt");

function day09Part01() {
    var answer = 1; // starts at one to account for starting position

    //plan: log a series of coordinates in an array, then count all unique coordinates
    //current task: I think all cases are good, need to figure out how to get distinct values
    
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

                if ((xPositionTail - xPositionHead) > 1) {
                    yPositionTail = yPositionHead;
                    var numberOfTailMoves = xPositionTail - xPositionHead;

                    for (let j = 0; j < numberOfTailMoves - 1; j++) {
                        xPositionTail--;
                        allPositions.push([xPositionTail, yPositionTail]);
                    }
                }
 
                break;

            case "R":
                xPositionHead += numberOfSteps;

                if ((xPositionHead - xPositionTail) > 1) {
                    yPositionTail = yPositionHead;
                    var numberOfTailMoves = xPositionHead - xPositionTail;

                    for (let j = 0; j < numberOfTailMoves - 1; j++) {
                        xPositionTail++;
                        allPositions.push([xPositionTail, yPositionTail]);
                    }
                }
                
                break;

            case "U":
                yPositionHead += numberOfSteps;

                if ((yPositionHead - yPositionTail) > 1) {
                    xPositionTail = xPositionHead;
                    var numberOfTailMoves = yPositionHead - yPositionTail;

                    for (let j = 0; j < numberOfTailMoves - 1; j++) {
                        yPositionTail++;
                        allPositions.push([xPositionTail, yPositionTail]);
                    }
                }

                break;

            case "D":
                yPositionHead -= numberOfSteps;

                if ((yPositionTail - yPositionHead) > 1) {
                    xPositionTail = xPositionHead;
                    var numberOfTailMoves = yPositionHead - yPositionTail;

                    for (let j = 0; j < numberOfSteps - 1; j++) {
                        yPositionTail--;
                        allPositions.push([xPositionTail, yPositionTail]);
                    }
                }
                
                break;
        }
    }

    var uniquePositions = new Set(allPositions);

    return [... new Set(allPositions)];
}

console.log(day09Part01());