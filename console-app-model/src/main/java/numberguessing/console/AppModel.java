package numberguessing.console;

import numberguessing.PositiveIntegerGenerator;

public final class AppModel {

    private final static String NEW_LINE = System.lineSeparator();
    public static final String SELECT_MODE_MESSAGE = "1: Single player game" + NEW_LINE + "2: Multiplayer game" + NEW_LINE + "3: Exit"
            + NEW_LINE + "Enter selection: ";
    private int answer;
    private final PositiveIntegerGenerator generator;
    private String output;
    private boolean completed;
    private boolean singlePlayerMode;
    private int tries;

    public AppModel(PositiveIntegerGenerator generator) {
        this.generator = generator;
        this.completed = false;
        this.output = SELECT_MODE_MESSAGE;
        this.singlePlayerMode = false;
        this.tries = 0;
    }

    public boolean isCompleted() {
        return completed;
    }

    public String flushOutput() {
        return output;
    }

    public void processInput(String input) {
        if (singlePlayerMode) {
            processSinglePlayerGame(input);
        } else {
            processModeSelection(input);
        }
    }

    private void processSinglePlayerGame(String input) {
        tries++;
        int guess = Integer.parseInt(input);
        if (guess < answer) {
            output = "Your guess is too low." + NEW_LINE + "Enter your guess: ";
        } else if (guess > answer) {
            output = "Your guess is too high." + NEW_LINE + "Enter your guess: ";
        } else {
            output = "Correct! " + tries + (tries == 1 ? " guess." : " guesses.") + NEW_LINE + SELECT_MODE_MESSAGE;
            singlePlayerMode = false;
        }
    }

    private void processModeSelection(String input) {
        if (input.equals("1")) {
            output = "Single player game" + NEW_LINE + "I'm thinking of a number between 1 and 100."
                    + NEW_LINE + "Enter your guess: ";
            singlePlayerMode = true;
            answer = generator.generateLessThanOrEqualToHundread();
        } else {
            completed = true;
        }
    }
}
