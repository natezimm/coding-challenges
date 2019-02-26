// Returns true if two decimals are equal up to three decimal places

public class DecimalComparator{
     public static boolean areEqualByThreeDecimalPlaces(double num1, double num2){
        double num3 = num1 - num2;
        if(Math.abs(num3) <= 0.0009){
            return true;
        } else {
            return false;
        }
    }
}
