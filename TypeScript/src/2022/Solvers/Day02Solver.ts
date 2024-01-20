import { parseToStrings } from "../Helpers/InputParser.js";

var rounds = parseToStrings("TypeScript/src/2022/Inputs/Day02Input.txt");

function day02Part01() {
    var score = 0;

    var possibleOutcomes = {
        "A X": 4,
        "A Y": 8,
        "A Z": 3,
        "B X": 1,
        "B Y": 5,
        "B Z": 9,
        "C X": 7,
        "C Y": 2,
        "C Z": 6,
    }

    for (const round of rounds) {
        if (Object.keys(possibleOutcomes).includes(round)) {
            var points = possibleOutcomes[round];
            score += points;
        }
    }

    return score;
}

function day02Part02() {
    var score = 0;

    var possibleOutcomes = {
        "A X": 3,
        "A Y": 4,
        "A Z": 8,
        "B X": 1,
        "B Y": 5,
        "B Z": 9,
        "C X": 2,
        "C Y": 6,
        "C Z": 7,
    }

    for (const round of rounds) {
        if (Object.keys(possibleOutcomes).includes(round)) {
            var points = possibleOutcomes[round];
            score += points;
        }
    }

    return score;
}

console.log(day02Part02());