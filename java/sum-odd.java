//This fuction will sum only the odd numbers

public class SumOddRange {
 
public  static int sumOdd(int start,int end)
{
    if (end < start || start < 1|| end < 1)
    {
        return -1;
    }
 
    int sum = 0;
    for (int i = start;i<=end;i++)
    {
        if (isOdd(i))
        {
            sum = sum + i;
        }
    }
    return sum;
}
 
public static boolean isOdd(int n)
{
    if (n < 0)
    {
        return  false;
    }
 
    if (n % 2== 0)
    {
        return  false;
    }else
    {
        return  true;
    }
}
 
}
