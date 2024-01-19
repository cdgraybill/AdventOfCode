import { parseToString } from "../Inputs/InputParser.js";

var input = parseToString("ProblemInputs/2022/Day06Input.txt");

function isUnique(str: string) {
    return new Set(str).size == str.length;
  }

function day06Part01() {
    var answer = 4; // starting at 4 because this is the lowest possible answer

    for (let i = 4; i < input.length; i++) {
        var subroutine = input.substring(i - 4, i);
        
        if (isUnique(subroutine) === true) {
            break;
        } else {
            answer++
        }
    }

    return answer;
}

function day06Part02() {
    var answer = 14; // starting at 4 because this is the lowest possible answer

    for (let i = 14; i < input.length; i++) {
        var subroutine = input.substring(i - 14, i);
        
        if (isUnique(subroutine) === true) {
            break;
        } else {
            answer++
        }
    }

    return answer;
}

console.log(day06Part02());