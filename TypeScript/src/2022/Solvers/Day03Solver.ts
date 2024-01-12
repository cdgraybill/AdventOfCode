import { parseToStrings } from "../Inputs/InputParser.js";

var bags = parseToStrings("TypeScript/src/2022/Inputs/Day03Input.txt");

function day03Part01() {
    var answer = 0;

    for (const bag of bags) {
        var bagSize = bag.length;
        var compartmentOne = bag.substring(0, bagSize / 2);
        var compartmentTwo = bag.substring(bagSize / 2);
        const regex = /[A-Za-z]/g;

        for (const item of compartmentOne) {
            const found = compartmentTwo.match(regex).toString();
            if (found.length > 0 && found == found.toUpperCase()) {
                answer += found.charCodeAt(0) - 38;
            }

            if (found.length > 0 && found == found.toLowerCase()) {
                answer += found.charCodeAt(0) - 96;
            }
                
        }
    }

    return answer;
}

console.log(day03Part01());
