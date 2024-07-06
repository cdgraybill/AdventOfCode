import { parseToStrings } from "../Helpers/InputParser.js";

var input = parseToStrings("ProblemInputs/2022/Day10Input.txt");

function day10Part01() {
    //TODO: signal strength is not always correct

    var valueQueue = [0, 0];
    var cpu = 1;
    var answer = 0;
    var cycleNumber = 0;

    for (var i = 0; i < input.length; i++) {
        var cycle = input[i].split(" ");
        var value = parseInt(cycle[1]);
        var currentCycleCount = cycle[0] === "noop" ? 1 : 2;

        if (!Number.isNaN(value)) {
            valueQueue.push(value);
        } else {
            valueQueue.push(0);
        }
        
        cpu += valueQueue.shift();

        for (let j = 0; j < currentCycleCount; j++) {
            cycleNumber++;
            if (cycleNumber === 20 || cycleNumber === 60 || cycleNumber === 100 || cycleNumber === 140 || cycleNumber === 180 || cycleNumber === 220) {
                var signalStrength = cycleNumber * cpu
                answer += signalStrength;
            }
        }
    }

    return cpu;
};

console.log(day10Part01())