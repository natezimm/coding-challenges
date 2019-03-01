// Returns area of circle from the radius

public class AreaCalculator {
         public static double area(double radius){
        if(radius < 0 ){
            return -1.0;
        }
        return radius * radius * 3.14159;
    }
    }
