import { parseToStrings } from "../Inputs/InputParser.js";

var input = parseToStrings("TypeScript/src/2022/Inputs/Day05Input.txt");

function getColumns(input: string[]) {
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
    for (let i = 0; i < boxGrid.length - 1; i ++) {
        for (let j = 1; j < boxGrid[i].length - 1; j += 4) {
            var box = boxGrid[i][j];
            var column = boxGrid[boxGrid.length - 1][j];

            if (box != " ") {
                parsedList[column - 1] += box;
            }
        }
    }

    // 'undefined' was at the beginning of each string, so we're removing that
    var columns = parsedList.map(x => x.substring(9));

    return columns;
}

function day05Part01() {
    var columns = getColumns(input);

    var instructions = input.filter(x => x.startsWith("m"));
    var test = instructions.map(x => x.replace(/[^0-9]+/, ''));
}

console.log(day05Part01());