import { parseToStrings } from "../Inputs/InputParser.js";

var bags = parseToStrings("TypeScript/src/2022/Inputs/Day03Input.txt");

function day03Part01() {
    var answer = 0;

    for (const bag of bags) {
        var bagSize = bag.length;
        var compartmentOne = bag.substring(0, bagSize / 2);
        var compartmentTwo = bag.substring(bagSize / 2);

        for (let i = 0; i < compartmentOne.length; i++) {
            for (let j = 0; j < compartmentTwo.length; j++) {
                var pointerOne = compartmentOne[i];
                var pointerTwo = compartmentTwo[j];
                if (pointerOne == pointerTwo && pointerTwo == pointerTwo.toUpperCase()) {
                    answer += pointerTwo.charCodeAt(0) - 38;
                    continue;
                }

                if (pointerOne == pointerTwo && pointerTwo == pointerTwo.toLowerCase()) {
                    answer += pointerTwo.charCodeAt(0) - 96;
                    continue;
                }
            }
        }
    }

    return answer;
}

console.log(day03Part01());
