// Returns true if person wakes up since dog is barking before 8  AM or after 10 PM

public class BarkingDog {
   
   public static boolean bark(boolean barking, int hourOfDay){
        if(hourOfDay >= 0 && hourOfDay < 8 && barking == true){
            return true;
        } else if(hourOfDay > 22 && hourOfDay <= 23 && barking == true){
            return true;
        } else {
            return false;
        }
    }
}
