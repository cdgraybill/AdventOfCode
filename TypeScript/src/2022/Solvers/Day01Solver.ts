import { parseToStrings } from "../Inputs/InputParser.js";

var snacks = parseToStrings("TypeScript/src/2022/Inputs/Day01Input.txt");

function Day01Part01() {
    var bags = [];

    CalcualteBagWeights(bags);

    return Math.max.apply(0, bags);
} 

function CalcualteBagWeights(bags: any[]) {
    var temp = 0;

    for (const snack of snacks) {
        if (snack.length === 0) {
            bags.push(temp);
            temp = 0;
        } else {
            temp += parseInt(snack);
        }
    }
    return temp;
}

function Day01Part02() {
    var bags = [];

    CalcualteBagWeights(bags);

    var first = -1;
    var second = -1;
    var third = -1;

    for (var bag of bags) {
        if (bag > first) {
            third = second;
            second = first; 
            first = bag; 
        }
        else if (bag > second) {
            third = second;
            second = bag; 
        }
        else if (bag > third){
            third = bag;
        }
    }

    return first + second + third;
} 