import { parseToStrings } from "../Inputs/InputParser.js";

function Day01Part01() {
    var snacks = parseToStrings("TypeScript/src/2022/Inputs/Day01Input.txt");
    var temp = 0;
    var bags = [];

    for (const snack of snacks) {
        if (snack.length === 0) {
            bags.push(temp);
            temp = 0;
        } else {
            temp += parseInt(snack);
        }
    }

    return Math.max.apply(0, bags);
} 

console.log(Day01Part01());