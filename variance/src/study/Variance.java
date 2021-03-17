package study;

import java.util.Arrays;

public class Variance {
    public static void main(String[] args) {

        String output;

        switch (args.length) {
            case 0 :
                output = "데이터가 입력되지 않았습니다.";
                break;
            case 1 :
                output = "2개 이상의 데이터를 입력하세요.";
                break;
            default:
                output = getVarianceOutput(args);
                break;
        }

        System.out.println(output);
    }

    private static String getVarianceOutput(String[] args) {
        double[] source = parseDoubles(args);
        double mean = calculateMean(source);
        double sumOfSquares = calculateSumOfSquares(source, mean);
        double variance = sumOfSquares / (args.length - 1);
        return "분산 : " + variance;
    }

    private static double calculateSumOfSquares(double[] source, double mean) {
        return Arrays.stream(source)
                .map(x -> x - mean)
                .map(x -> x * x)
                .sum()
                ;
    }

    private static double calculateMean(double[] source) {
        return Arrays.stream(source).average().orElse(0);
    }

    private static double[] parseDoubles(String[] args) {
        return Arrays.stream(args)
                .mapToDouble(Double::parseDouble)
                .toArray();
    }
}
