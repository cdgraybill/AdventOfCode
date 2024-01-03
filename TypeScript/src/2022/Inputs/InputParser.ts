import { readFileSync } from 'fs';

function parseToStrings(input: string) {
    var text = readFileSync(input).toString('utf-8');
    return text.split("\n")
}

function parseToInts(input: string) {
    var text = readFileSync(input).toString('utf-8').split("\r\n");
    var numbers = text.forEach(element => {
        
        parseInt(element);
    });
    return numbers;
}

export {parseToStrings, parseToInts};