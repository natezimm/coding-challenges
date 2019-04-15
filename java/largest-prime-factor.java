// Find largest prime factor of a given number

public class LargestPrime {
    public static int getLargestPrime(int number)
        {
            int i;
            int might_be_prime=number;
            if (number < 2) return -1;
            for(i=2;i<might_be_prime;i++) {
                //is it a factor?
                if ((might_be_prime % i) == 0) {
                    //oops! not prime prime factor - so / by this factor to get the next highest might_be_prime factor
                    might_be_prime = might_be_prime/i;
                    i=i-1;  //we don't wont to increment, because i might divide the number more than once
                    }
                }
                int highest_prime = might_be_prime;
        return highest_prime;
        }
}  
