import { parseTo2dIntArray, parseToStrings } from "../Helpers/InputParser.js";

var input = parseTo2dIntArray("ProblemInputs/2022/Day08Input.txt");

function day08part01() {
    var answer = (input[0].length * 2) + ((input.length - 2) * 2); //this accounts for all trees on the edge
    var verticalLines = [];
    var treeLine = [];

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            const tree = input[j][i];

            treeLine.push(tree);
        }
        verticalLines.push(treeLine);
        treeLine = [];
    }

    for (let k = 1; k < input.length - 1; k++) {
        for (let l = 1; l < input[k].length - 1; l++) {
            const tree = input[k][l];

            var leftOfTree = Math.max(...input[k].slice(0, l));
            var rightOfTree = Math.max(...input[k].slice(l + 1));
            var aboveTree = Math.max(...verticalLines[l].slice(0, k));
            var belowTree = Math.max(...verticalLines[l].slice(k + 1));
            
            if (tree > leftOfTree || tree > rightOfTree || tree > aboveTree || tree > belowTree) {
                answer++;
            }
        }
    }

    return answer;
}

function day08part02() { 
    var answer = 0;
    var verticalLines = [];
    var treeLine = [];

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            const tree = input[j][i];

            treeLine.push(tree);
        }
        verticalLines.push(treeLine);
        treeLine = [];
    }

    for (let k = 1; k < input.length - 1; k++) {
        for (let l = 1; l < input[k].length - 1; l++) {
            const tree = input[k][l];

            var leftOfTree = getScenicScore(input[k].slice(0, l).reverse(), tree);
            var aboveTree = getScenicScore(verticalLines[l].slice(0, k).reverse(), tree);
            var rightOfTree = getScenicScore(input[k].slice(l + 1), tree);
            var belowTree = getScenicScore(verticalLines[l].slice(k + 1), tree);

            var totalScenicScore = leftOfTree * rightOfTree * aboveTree * belowTree;

            if (totalScenicScore > answer) {
                answer = totalScenicScore;
            }
        }
    }

    return answer;
}

// TODO need to get the scoring algorithim down
function getScenicScore(treeLine: number[], currentTree: number) {
    var score = 0;

    for (const tree of treeLine) {
        if (treeLine.length === 1) {
            score++;
            break;
        } else if (currentTree > tree) {
            score++;
        } else {
            break;
        }
    }

    return score;
}

console.log(day08part02());