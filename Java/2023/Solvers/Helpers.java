package Solvers;

public class Helpers {
    public int getLineId(String game) {
        int id = 0;

        int index = game.indexOf(":");
        game = game.substring(0, index);
        id = Integer.parseInt(game.replaceAll("[^\\d.]", ""));

        return id;
    }
}
