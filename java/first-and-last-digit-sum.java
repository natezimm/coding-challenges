// Sums the first and last digit of an integer

public class FirstLastDigitSum {
public static int sumFirstAndLastDigit(int number){
        int firstDigit=0;
        int lastDigit=0;
        if (number<0){
            return -1;
        }
        lastDigit=number%10;
        while (number>0) {
           firstDigit=number%10;
           number=number/10;
        }
 
         int sum=lastDigit+firstDigit;
        return sum;
    } }
