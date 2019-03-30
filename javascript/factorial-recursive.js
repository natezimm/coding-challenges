// Create recursive function for factorials

function factorial(num){
    if(num < 0) return 0;
    if(num <= 1) return 1;
    return num * factorial(num-1);
}

console.log(factorial(4)); // 24
