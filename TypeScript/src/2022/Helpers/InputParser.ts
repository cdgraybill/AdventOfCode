import { readFileSync } from "fs";

function parseToStrings(input: string) {
  var text = readFileSync(input).toString();
  return text.split("\r\n");
}

function parseToString(input: string) {
  var text = readFileSync(input).toString();
  return text;
}

//this function is unique to Day 8, 2022
function parseTo2dIntArray(input: string) {
  // var lines = readFileSync(input).toString().split("\r\n");
  // var forestMap = [];
  // var treeLine = [];
  // var treesOnEdge = (lines[0].length * 2) + ((lines.length - 2) * 2);

  // for (let i = 1; i < lines.length - 1; i++) {
  //   for (let j = 1; j < lines[i].length - 1; j++) {
  //     const tree = parseInt(lines[i][j]);
  //     treeLine.push(tree);
  //   }
  //   forestMap.push(treeLine);
  //   treeLine = [];
  // }

  // return {forestMap, treesOnEdge};

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
