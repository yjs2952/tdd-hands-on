package numberguessing;

public class PositiveIntegerGeneratorStub implements PositiveIntegerGenerator {

    private final int[] numbers;
    private int index;

    public PositiveIntegerGeneratorStub(int... numbers) {
        this.numbers = numbers;

    }

    @Override
    public int generateLessThanOrEqualToHundread() {
        int number = numbers[index];
        index = (index + 1) % numbers.length;   // numbers 길이 이상 될 때 마다 0으로 초기화
        return number;
    }
}
