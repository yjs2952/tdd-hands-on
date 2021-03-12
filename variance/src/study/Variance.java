package study;

public class Variance {
    public static void main(String[] args) {

        if (args.length == 0) {
            System.out.println("데이터가 입력되지 않았습니다.");
            return;
        } else if (args.length == 1) {
            System.out.println("2개 이상의 데이터를 입력하세요.");
            return;
        }

        double[] s = new double[args.length];

        int length = s.length;

        for (int i = 0; i < length; i++) {
            s[i] = Double.parseDouble(args[i]);
        }

        double sum = 0.0;

        for (double v : s) {
            sum += v;
        }

        double mean = sum / length;

        double sumOfSquares = 0.0;

        for (double v : s) {
            sumOfSquares += (v - mean) * (v - mean);
        }

        double variance = sumOfSquares / (length - 1);

        System.out.println("분산 : " + variance);
    }
}
