import { parseToStrings } from "../Inputs/InputParser.js";

function Day01Part01() {
    var snacks = parseToStrings("TypeScript/src/2022/Inputs/Day01Input.txt");
    var largestBag = 0;
    var temp = 0;

    for (let i = 0; i < snacks.length; i++) {
        if (snacks[i] === '' && temp > largestBag) {
            largestBag = temp;
            temp = 0;
            continue;
        } else {
            var snack = parseInt(snacks[i]);
            temp += snack;
        }
    }

    return largestBag;
} 

console.log(Day01Part01());