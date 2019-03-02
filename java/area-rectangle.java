// Finds area of a rectangle

public class AreaCalculator {
    public static double area(double x, double y){
        if(x < 0 || y < 0){
            return -1.0;
        }
        return x * y;
    }
}
