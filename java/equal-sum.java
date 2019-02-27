 // Returns true if sum of first two integers is equal to thrid integer
 
 public class EqualSumChecker {
     public static boolean hasEqualSum(int num1, int num2, int num3){
        int sum = num1 + num2;
        if(sum == num3){
            return true;
        } else {
            return false;
        }
        
    }
}
