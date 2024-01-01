package Solvers;

import java.io.IOException;
import java.util.ArrayList;

import Inputs.InputParser;

public class Day02Solver extends InputParser{
    public int day02Part01() throws IOException {
        ArrayList<String> games = getGames();
        Helpers helper = new Helpers();

        int answer = 0;

        for (String game : games) {
            int index = game.indexOf(":");
            String gameRolls = game.substring(index + 2);
            boolean isBadGame = false;

            StringBuilder sb = new StringBuilder();
            char[] charArray = gameRolls.toCharArray();
            int cubes = 0;

            for (char letter : charArray) {
                if (Character.isDigit(letter)) {
                    sb.append(letter);
                    cubes = Integer.parseInt(sb.toString());
                } else {
                    sb.setLength(0);
                }

                if ((cubes > 14 && letter == 'b') || (cubes > 13 && letter == 'n') || (cubes > 12 && letter == 'd')) {
                    isBadGame = true;
                    cubes = 0;
                    break;
                }
            }

            if (!isBadGame) {
                answer += helper.getLineId(game);
            }
        }

        return answer;
    }

    public int day02Part02() throws IOException {
        ArrayList<String> games = getGames();

        int answer = 0;

        for (String game : games) {
            int index = game.indexOf(":");
            String gameRolls = game.substring(index + 2);

            StringBuilder sb = new StringBuilder();
            char[] charArray = gameRolls.toCharArray();
            int cubes = 0;
            int blue = 0;
            int green = 0;
            int red = 0;

            for (char letter : charArray) {
                if (Character.isDigit(letter)) {
                    sb.append(letter);
                    cubes = Integer.parseInt(sb.toString());
                } else {
                    sb.setLength(0);
                }

                if (letter == 'b' && cubes > blue) {
                    blue = cubes;
                    cubes = 0;
                }

                if (letter == 'n' && cubes > green) {
                    green = cubes;
                    cubes = 0;
                }

                if (letter == 'd' && cubes > red) {
                    red = cubes;
                    cubes = 0;
                }
            }
            answer += (red * blue * green);
        }

        return answer;
    }

    private ArrayList<String> getGames() throws IOException {
        ArrayList<String> games = ReadLines("C:/Users/CameronGraybill/Documents/Code/AoC2023Java/Inputs/Day02Input.txt");
        return games;
    }
}
