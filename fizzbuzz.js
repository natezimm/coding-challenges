// FizzBuzz: For numbers 1 - 100
// For multiples of three print “Fizz”
// For the multiples of five print “Buzz”
// For numbers which are multiples of both three and five print “FizzBuzz”

for(var i = 0; i < 100; i++){
    if(i % 3 === 0 && i % 5 ==0){
        console.log("Fizzbuzz");
    } else if(i % 3 === 0){
        console.log("Fizz")
    } else if(i % 5 === 0){
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
