// Returns days and years from minutes input

public class MinutesToYearsDaysCalculator {
    public static void printYearsAndDays(long minutes){
        if(minutes < 0){
            System.out.println("Invalid Value");
        } else {
        long years = (((minutes / 60) / 24) / 365);
        long days = (((minutes / 60) / 24) % 365);
        System.out.println(minutes + " min = " + years + " y and " + days + " d");
        }
    }
    
    
}
