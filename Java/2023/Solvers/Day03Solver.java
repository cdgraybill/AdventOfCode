package Solvers;

import java.io.IOException;
import java.util.ArrayList;

import Inputs.InputParser;

public class Day03Solver extends InputParser {
    
    public int day03Part01() throws IOException {
        ArrayList<String> schematic = ReadLines("C:/Users/CameronGraybill/Documents/Code/AoC2023Java/Inputs/Day03Input.txt");

        int answer = 0;

        //Scan along the line until an int is hit
        for (int i = 0; i < schematic.size() - 1; i++) {
            for (int j = 0; j < schematic.get(i).length() - 1; j++) {
                StringBuilder sb = new StringBuilder();
                char currentChar = schematic.get(i).charAt(j);

                if (Character.isDigit(currentChar)) {
                    sb.append(currentChar);
                }
            }
        }

        //Append all ints in the number

        //Scan around the number to see if it's a part number

        return answer;
    }
}
