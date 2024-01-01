package Solvers;

import java.io.IOException;
import java.util.ArrayList;

import Inputs.InputParser;

public class Day01Solver extends InputParser{
    public int day01Part01() throws IOException {
        ArrayList<String> lines = ReadLines("C:/Dev Projects/AoC2023Java/Inputs/Day01Input.txt");

        int answer = 0;

        for (String line : lines) {
            line = line.replaceAll("[^\\d.]", "");
            String calibrationValue = line.substring(0, 1) + line.substring(line.length() - 1); 
            answer += Integer.parseInt(calibrationValue);
        }

        return answer;
    }

    // public int day01Part02() throws IOException {
    //     InputParser inputParser = new InputParser();
    //     ArrayList<String> lines = inputParser.ReadLines("C:/Dev Projects/AoC2023Java/Inputs/Day01Input.txt");

    //     int answer = 0;

    //     Map<String, Integer> numbers = new HashMap<>();

    //     numbers.put("one", 1);
    //     numbers.put("two", 2);
    //     numbers.put("three", 3);
    //     numbers.put("four", 4);
    //     numbers.put("five", 5);
    //     numbers.put("six", 6);
    //     numbers.put("seven", 7);
    //     numbers.put("eight", 8);
    //     numbers.put("nine", 9);
        
    //     for (String line : lines) {
    //         StringBuilder scanner = new StringBuilder();
    //         StringBuilder calibrationValue = new StringBuilder();

    //         for (int i = 0; i < line.length(); i++) {
    //             if (Character.isDigit(line.charAt(i))) {
    //                 calibrationValue.append(line.charAt(i));

    //             } else {
    //                 scanner.append(line.charAt(i));
    //                 if (scanner.toString().contains()) {

    //                 }
    //             }
    //         }
    //     }

    //     return answer;
    // }
}
