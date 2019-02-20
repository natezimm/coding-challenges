// Function converts km/hr to mph
// Additional function prints conversion of rates

public class SpeedConverter {
    
    public static long toMilesPerHour(double kilometresPerHour)
    {
        long result;
        if(kilometresPerHour < 0)
        {
            result= -1;
        }else
        {
            result = Math.round(kilometresPerHour/1.609);
        }
        return result;
        
    }
    
    public static void printConversion(double kilometresPerHour)
    {
        long miles=toMilesPerHour(kilometresPerHour);
        if (miles==-1)
        {
            System.out.println("Invalid Value");
        }else{
        System.out.println(kilometresPerHour +" km/h"+" = "+ miles+" mi/h" );
        }
    }
}
