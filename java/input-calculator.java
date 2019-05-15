// Program takes integers and prints out the sum and mean

import java.util.Scanner;
 
public class InputCalculator {
public static void inputThenPrintSumAndAverage() {
Scanner sc = new Scanner(System.in);
int sum = 0;
int count = 0;
while (sc.hasNextInt()) {
sum = sum + sc.nextInt();
count++;
}
if (!sc.hasNextInt()) {
long avg = Math.round((double)sum / (double)count);
System.out.println("SUM = " + sum + " AVG = " + avg);
}
}
} 
