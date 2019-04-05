// Finds all factors of a given number

public class FactorPrinter {
        public static void printFactors(int number) {
        if (number < 1) {
            System.out.println("Invalid Value");
        } else {
            for (int i = 1; i <= number / 2; i++) {
                if (number % i == 0) {
                    System.out.println(i);
                }
            }
            System.out.println(number);
        }
    }}
