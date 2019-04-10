// Prints word form of a number

public class NumberToWords {
public static void numberToWords(int number) {
    if (number < 0) {
        System.out.println("Invalid Value");
    }
    int digit = 0;
    int newNumber = reverse(number);
    for (int i = 0; i < getDigitCount(number); i++) {
        digit = newNumber % 10;
        switch (digit) {
            case 0:
                System.out.println("Zero");
                break;
            case 1:
                System.out.println("One");
                break;
            case 2:
                System.out.println("Two");
                break;
            case 3:
                System.out.println("Three");
                break;
            case 4:
                System.out.println("Four");
                break;
            case 5:
                System.out.println("Five");
                break;
            case 6:
                System.out.println("Six");
                break;
            case 7:
                System.out.println("Seven");
                break;
            case 8:
                System.out.println("Eight");
                break;
            case 9:
                System.out.println("Nine");
                break;
        }
        newNumber /= 10;
    }
}
 
public static int reverse(int x) {
    int a = 0;
    int reverseNumber = 0;
    while (x != 0) {
        a = x % 10;
        x /= 10;
        reverseNumber = (reverseNumber * 10) + a;
    }
    return reverseNumber;
}
 
public static int getDigitCount(int number) {
    if (number < 0) {
        return -1;
    }
    int count = 0;
    do {
        number /= 10;
        count++;
    } while (number != 0);
    return count;
}}
