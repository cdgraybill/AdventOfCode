package Solvers;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import Inputs.InputParser;

public class Day04Solver extends InputParser {
    public int day04Part01() throws IOException { 
        ArrayList<String> lines = ReadLines("C:/Users/CameronGraybill/Documents/Code/AoC2023Java/Inputs/Day04Input.txt");

        int answer = 0;
        int colon = lines.get(0).indexOf(":");
        int divider = lines.get(0).indexOf("|");

        for (String line : lines) {
            List<String> winningNumbers = Arrays.asList(line.substring(colon, divider).split("\\s+"));
            List<String> cardNumbers = Arrays.asList(line.substring(divider).split("\\s+"));

            int pointCounter = 0;

            for (String wn : winningNumbers) {
                if (cardNumbers.contains(wn) && pointCounter == 0) {
                    pointCounter += 1;
                    continue;
                } else if (cardNumbers.contains(wn)) {
                    pointCounter *= 2;
                }
            }

            answer += pointCounter;
        }
        
        return answer;
    }

    public int day04Part02() throws IOException { 
        ArrayList<String> lines = ReadLines("C:/Users/CameronGraybill/Documents/Code/AoC2023Java/Inputs/Day04Input.txt");

        int answer = 0;
        int colon = lines.get(0).indexOf(":");
        int divider = lines.get(0).indexOf("|");

        for (String line : lines) {
            List<String> winningNumbers = Arrays.asList(line.substring(colon, divider).split("\\s+"));
            List<String> cardNumbers = Arrays.asList(line.substring(divider).split("\\s+"));

            int cardCounter = 1;

            for (String wn : winningNumbers) {
                if (cardNumbers.contains(wn)) {
                    cardCounter += 1;
                    continue;
                } 
            }
            answer += cardCounter;
        }
        return answer;
    }
}
