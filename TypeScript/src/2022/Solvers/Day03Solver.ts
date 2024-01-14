import { parseToStrings } from "../Inputs/InputParser.js";

var bags = parseToStrings("TypeScript/src/2022/Inputs/Day03Input.txt");

function day03Part01() {
    var answer = 0;

    for (const bag of bags) {
        var bagSize = bag.length;
        var compartmentOne = bag.substring(0, bagSize / 2);
        var compartmentTwo = bag.substring(bagSize / 2);

        for (let i = 0; i < compartmentOne.length; i++) {
            var pointer = compartmentOne[i];

            if (compartmentTwo.includes(pointer)) {
                answer += pointer.toLowerCase().charCodeAt(0) - 96;

                if (pointer == pointer.toUpperCase()) {
                    answer += 26;
                }
                break;
            }
        }
    }

    return answer;
}

function day03Part02() {
    var answer = 0;
    var group = [];

    for (const bag of bags) {
        group.push(bag);

        if (group.length == 3) {
            for (let i = 0; i < group[0].length; i++) {
                var pointer = group[0][i];

                if (group.every(x => x.includes(pointer))) {
                    answer += pointer.toLowerCase().charCodeAt(0) - 96;

                if (pointer == pointer.toUpperCase()) {
                    answer += 26;
                }

                group = [];
                break;
                }
            }
        } else {
            continue;
        }
    }

    return answer;
}

console.log(day03Part02());
