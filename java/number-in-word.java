//Prints out word of the number entered

public class NumberInWord {
    
    public static void printNumberInWord(int number){
    String[] wordNumber = {"ZERO","ONE","TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE"};
    switch (number){
        case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9:
            System.out.println(wordNumber[number]);
            break;
        default:
            System.out.println("OTHER");
            break;
    }
    }
}
