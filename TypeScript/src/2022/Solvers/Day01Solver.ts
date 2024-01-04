import { parseToStrings } from "../Inputs/InputParser.js";

function Day01Part01() {
    var snacks = parseToStrings("TypeScript/src/2022/Inputs/Day01Input.txt");
    var largestBag = 0;
    var temp = 0;

    for (const snack of snacks) {
        if (snack.length === 0 && temp > largestBag) {
            largestBag = temp;
            temp = 0;
        } else {
            temp += parseInt(snack);
        }
    }

    return largestBag;
} 

console.log(Day01Part01());