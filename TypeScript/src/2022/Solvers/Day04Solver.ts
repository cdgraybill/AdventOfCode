import { parseToStrings } from "../Helpers/InputParser.js";

var assignments = parseToStrings("TypeScript/src/2022/Inputs/Day04Input.txt");

function day04Part01() {
    var answer = 0;

    for (const assignment of assignments) {
        var parsed = parseAssignment(assignment);
        var pairOne = parsed.firstPair;
        var pairTwo = parsed.secondPair;

        if ((pairOne[0] >= pairTwo[0] && pairOne[1] <= pairTwo[1]) || (pairTwo[0] >= pairOne[0] && pairTwo[1] <= pairOne[1])) {
            answer++;
        }
    }

    return answer;
}

function day04Part02() {
    var answer = 0;

    for (const assignment of assignments) {
        var parsed = parseAssignment(assignment);
        var pairOne = parsed.firstPair;
        var pairTwo = parsed.secondPair;

        if ((pairOne[1] >= pairTwo[0] && pairOne[0] <= pairTwo[1])) {
            answer++;
        }
    }

    return answer;
}

function parseAssignment(assignment: string) {
    var splitIndex = assignment.indexOf(",");
    var firstPair = assignment.substring(0, splitIndex).split("-").map(x => parseInt(x));
    var secondPair = assignment.substring(splitIndex + 1).split("-").map(x => parseInt(x));;
    
    return {firstPair, secondPair};
}

console.log(day04Part02());