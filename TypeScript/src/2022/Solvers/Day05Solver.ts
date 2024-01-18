import { parseToStrings } from "../Inputs/InputParser.js";

var input = parseToStrings("TypeScript/src/2022/Inputs/Day05Input.txt");

function getColumns() {
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

    return columns.map(x => x.split("").reverse());
}

function getInstructions() {
    var lettersRemoved = input.filter(x => x.includes("from")).map(x => x.replace(/\D+/g, ' '));
    var instructions = [];

    for (const line of lettersRemoved) {
        instructions.push(line.trim().split(" "));
    }

    return instructions;
}

function day05Part01() {
    var columns = getColumns();
    var instructions = getInstructions();

    for (const line of instructions) {
        var numberOfCrates = parseInt(line[0]);
        var fromColumnIndex = parseInt(line[1]) - 1;
        var toColumnIndex = parseInt(line[2]) - 1;

        for (let i = 0; i < numberOfCrates; i++) {
            var crate = columns[fromColumnIndex].pop();
            columns[toColumnIndex].push(crate);
        }
    }

    var answer = "";
    for (const column of columns) {
        answer += column[column.length - 1];
    }

    return answer;
}

function day05Part02() {
    var columns = getColumns();
    var instructions = getInstructions();

    for (const line of instructions) {
        var numberOfCrates = parseInt(line[0]);
        var fromColumnIndex = parseInt(line[1]) - 1;
        var toColumnIndex = parseInt(line[2]) - 1;
        
        var crates = columns[fromColumnIndex].splice(columns[fromColumnIndex].length - numberOfCrates, numberOfCrates);
        
        for (const crate of crates) {
            columns[toColumnIndex].push(crate);
        }
    }

    var answer = "";
    for (const column of columns) {
        answer += column[column.length - 1];
    }

    return answer;
}

console.log(day05Part02());
