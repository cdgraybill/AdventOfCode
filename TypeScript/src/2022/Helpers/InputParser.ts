import { readFileSync } from "fs";

function parseToStrings(input: string) {
  var text = readFileSync(input).toString();
  return text.split("\r\n");
}

function parseToString(input: string) {
  var text = readFileSync(input).toString();
  return text;
}

function parseTo2dIntArray(input: string) {
  var lines = readFileSync(input).toString().split("\r\n");
  var forestMap = [];
  var treeLine = [];

  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      const tree = parseInt(lines[i][j]);
      treeLine.push(tree);
    }
    forestMap.push(treeLine);
    treeLine = [];
  }

  return forestMap;
}

export { parseToStrings, parseToString, parseTo2dIntArray };
