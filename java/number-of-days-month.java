//Returns the number of days in a given month

public class NumberOfDaysInMonth {
    // write your code here
    
public static boolean isLeapYear( int year){
    if((year <1) || (year > 9999)){
        return false;
    }
    else if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        return true;
    }
 
    return false;
}
 
public static int getDaysInMonth(int month, int year){
    if((((month< 1) || (month >12) || (year < 1) || (year > 9999)))){
        return -1;
    }
    switch (month){
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            return 31;
        case 4: case 6: case 9: case 11:
            return 30;
        case 2:
            if (isLeapYear(year)){
                return 29;
            }else
                return 28;
    }
    return -1;
 
}
}
