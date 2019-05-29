// Program calculates the number of flour bags needed based on size

public class FlourPacker {
public static boolean canPack(int bigCount, int smallCount, int goal) {
 
        if (bigCount < 0 || smallCount < 0 || goal < 0) {
            return false;
        }
 
        int bigCountBags = bigCount * 5;
        int smallCountBags = smallCount;
        int goalBigBags = goal / 5;
 
        if (goal <= (bigCountBags + smallCountBags)) {
 
            if (bigCount > goalBigBags) {
                
                int diffcount = bigCount - goalBigBags;
                bigCount = bigCount - diffcount;
                
                if (((bigCount * 5) + smallCount) >= goal) {
                    return true;
                }
            } else {
                if (bigCount <= goalBigBags) {
                    if ((bigCountBags + smallCountBags) >= goal) {
                        return true;
                    }
                }
            }
        }
        return false;
    }}
