import { parseToStrings } from "../Inputs/InputParser.js";

var bags = parseToStrings("TypeScript/src/2022/Inputs/Day03Input.txt");

function day03Part01() {
    var answer = 0;

    for (const bag of bags) {
        var bagSize = bag.length;
        var compartmentOne = bag.substring(0, bagSize / 2);
        var compartmentTwo = bag.substring(bagSize / 2);

        for (let i = 0; i < compartmentOne.length; i++) {
            if (compartmentTwo.includes(compartmentOne[i]) ) {
                answer += compartmentOne[i].toLowerCase().charCodeAt(0) - 96;
                if (compartmentOne[i] == compartmentOne[i].toUpperCase()) {
                    answer += 26;
                }
                break;
            }
        }
    }

    return answer;
}

console.log(day03Part01());
