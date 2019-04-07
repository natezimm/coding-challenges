//Determines if an integer is a perfect number

public class PerfectNumber {
public static boolean isPerfectNumber(int num) {
 
        if (num < 1) {
            return false;
        }
 
        int divisor = 1;
        int loopCount = num;
        int sum = 0;
 
        while (divisor < loopCount) {
            if (num % divisor == 0) {
                sum += divisor;
            }
            divisor ++;
        }
        if (sum == num) {
            return true;
        } else {
            return false;
        }
    }}
