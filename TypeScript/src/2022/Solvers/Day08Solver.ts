import { parseTo2dIntArray, parseToStrings } from "../Helpers/InputParser.js";

var input = parseTo2dIntArray("ProblemInputs/2022/Day08Input.txt");

function day08part01() {
    var answer = 0;
    
    //I NEED TO ACCOUNT FOR ALL OUTSIDE TREES BEING VISIBLE

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            const tree = input[i][j];
            
            if (!Math.max(input[i]) === tree) {
                break;
            }
        }
    }

}

console.log(input);