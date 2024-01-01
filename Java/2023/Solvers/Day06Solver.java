package Solvers;

import java.io.IOException;
import java.util.ArrayList;

import Inputs.InputParser;

public class Day06Solver extends InputParser {
    public int day06Part01() throws IOException {
        ArrayList<String> input = ReadLines(
                "C:/Users/CameronGraybill/Documents/Code/AoC2023Java/Inputs/Day06Input.txt");
        String[] times = input.get(0).substring(13).split("\\s+");
        String[] distances = input.get(1).substring(12).split("\\s+");
        int answer = 1;

        for (int i = 0; i < distances.length; i++) {
            int time = Integer.parseInt(times[i]);
            int distanceToBeat = Integer.parseInt(distances[i]);
            int numberOfWays = 0;

            for (int j = 1; j <= time; j++) {
                int diff = time - j;
                int traveledDistance = j * diff;
                if (traveledDistance > distanceToBeat) {
                    numberOfWays += 1;
                }
            }

            answer *= numberOfWays;
        }

        return answer;
    }

    public int day06Part02() throws IOException {
        ArrayList<String> input = ReadLines(
                "C:/Users/CameronGraybill/Documents/Code/AoC2023Java/Inputs/Day06Input.txt");
        Long time = Long.parseLong(input.get(0).substring(13).replace(" ", ""));
        Long distance = Long.parseLong(input.get(1).substring(12).replace(" ", ""));

        int answer = 0;

        for (long j = 1; j <= time; j++) {
            long diff = time - j;
            long traveledDistance = j * diff;
            if (traveledDistance > distance) {
                answer += 1;
            }
        }

        return answer;
    }
}
