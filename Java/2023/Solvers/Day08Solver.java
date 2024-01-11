package Solvers;

import java.io.IOException;
import java.util.ArrayList;

import Inputs.InputParser;

public class Day08Solver extends InputParser {
    public int day08Part01() throws IOException {
        ArrayList<String> input = ReadLines("C:/Dev Projects/AoC2023Java/Inputs/Day08Input.txt");
        int startingIndex = 0;
        for(int i = 2; i < input.size(); i++) {
            String asdf = input.get(i).substring(0, 3).toString();
            // TODO: 'asdf' isn't registering as a string
            if (asdf == "AAA") {
                startingIndex = i;
            }
        }

        String startingNode = input.get(startingIndex);

        int answer = 0;

        return answer;
    }

    private String parseLine(String line) {
        String node = line.substring(0, 3);
        return node;
    }

    //this is a test

    private String findNextNode(char direction, String line) {
        String nextNode = "";

        if (direction == 'L') {
            nextNode = line.substring(7, 10);
        }
        else {
            nextNode = line.substring(12, 15);
        }

        return nextNode;
    }
}
