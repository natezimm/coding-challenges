// Will find greatest common divisor among two integers

public class GreatestCommonDivisor {
public static int getGreatestCommonDivisor(int num1, int num2){
        if (num1 < 10 || num2 < 10) {
            return -1;
        }
 
        int divisor = 1;
        int loopCount;
        int gcd = 0;
 
        if (num1 > num2) {
            loopCount = num2;
        } else {
            loopCount = num1;
        }
 
        while (divisor <= loopCount) {
 
            if ((num1 % divisor == 0) && (num2 % divisor == 0)) {
                gcd = divisor;
            }
            divisor++;
        }
        return gcd;
    } }
