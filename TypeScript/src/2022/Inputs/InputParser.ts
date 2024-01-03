import { readFileSync } from "fs";

function parseToStrings(input: string) {
  var text = readFileSync(input).toString();
  return text.split("\r\n");
}

export { parseToStrings };
