//Returns true if the cat is playing. Cat plays if temperature is between 25-35 or 25-45 if it is summer.

public class PlayingCat {
public static boolean isCatPlaying(boolean summer, int temperature ) {
    if ((summer) && ((temperature >= 25) && (temperature <=45))) {
        return true;
    } else if ((!summer) && ((temperature >= 25) && (temperature <=35))) {
        return true;
    } else {
        return false;
    }
}
}
