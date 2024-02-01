import { parseToStrings } from "../Helpers/InputParser.js";

var input = parseToStrings("ProblemInputs/2022/Day09Input.txt");

function day09Part01() {
    //current task: Example input gives right answer, but problem input does not
    
    var allPositions = [];

    var xPositionTail = 0;
    var yPositionTail = 0;

    var xPositionHead = 0;
    var yPositionHead = 0;

    for (let i = 0; i < input.length; i++) {
        var split = input[i].split(" ");
        var direction = split[0];
        var numberOfSteps = parseInt(split[1]);

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

    //this is so cursed
    var parsedPositions = JSON.stringify(allPositions);
    var asdf = parsedPositions.replace("[[", "").replace("]]", "").split("],[");
    var set = [...new Set(asdf)];

    return set.length + 1;
}

console.log(day09Part01());