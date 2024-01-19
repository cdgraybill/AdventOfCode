import { readFileSync } from "fs";

function parseToStrings(input: string) {
  var text = readFileSync(input).toString();
  return text.split("\r\n");
}

function parseToString(input: string) {
  var text = readFileSync(input).toString();
  return text;
}

export { parseToStrings, parseToString };
