import { parseToStrings } from "../Inputs/InputParser.js";

var input = parseToStrings("TypeScript/src/2022/Inputs/Day05Input.txt");

function getBoxGrid(input: string[]) {
    var boxGrid = [];

    // Let's get the box grid
    for (const line of input) {
        if (line.length !== 0) {
            boxGrid.push(line);
        } else {
            break;
        }
    }
    
    var columnsRow = boxGrid[boxGrid.length - 1];
    var numberOfColumns = parseInt(columnsRow[columnsRow.length - 2]);
    var parsedList = new Array<string>(numberOfColumns);

    // And then parse it into an array of easily malleable strings
    for (const line of boxGrid) {
        for (let i = 1; i < line.length - 1; i += 4) {
            var box = line[i];
            var column = boxGrid[boxGrid.length - 1][i];
            var parsedListIndex = parsedList[column - 1];

            if (box != " ") {
                parsedListIndex += box;
            }
        }
    }

    return parsedList;
}

console.log(getBoxGrid(input));