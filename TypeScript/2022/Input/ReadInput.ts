import {readFileSync} from "fs";

function parseInput(filePath: string) {
    var text = readFileSync(filePath).toString('utf-8');
    return text.split("\n")
} 

export default {parseInput};