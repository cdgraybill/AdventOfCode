import { parseToStrings } from "../Inputs/InputParser.js";

var input = parseToStrings("TypeScript/src/2022/Inputs/Day05Input.txt");

function getBoxGrid(input: string[]) {
    var boxGrid = [];

    for (const line of input) {
        if (line.length !== 0) {
            boxGrid.push(line);
        } else {
            break;
        }
    }

    return boxGrid;
}

console.log(getBoxGrid(input));