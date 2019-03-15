// Determines if a number is a palindrome

public class NumberPalindrome {
     public static boolean isPalindrome(int number) {
        number = number < 0 ? (-1 * number) : number;
        int originalNumber = number;
        int reverse = 0;
        do {
            //extract and add to reverse
            reverse = (reverse * 10) + (number % 10);
            //discard
            number /= 10;
        } while (number > 0);
        if (reverse == originalNumber)
            return true;
        else
            return false;
    }
}
