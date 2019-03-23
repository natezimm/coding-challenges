// Function to determine if two ints share a digit

public class SharedDigit {
public static boolean hasSharedDigit(int first, int second) {
    boolean result = false;
    if ((first >= 10 && first <= 99) && (second >= 10 && second <= 99)) {
        if (((first / 10) == (second / 10)) ||
                ((first % 10) == second / 10) ||
                ((first / 10) == (second % 10)) ||
                ((first % 10) == (second % 10))) {
            result = true;
        }
    }
    return result;
}}
