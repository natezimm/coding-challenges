// Function converts km/hr to mph

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
}

