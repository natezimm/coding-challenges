// Function returns the factorial of the positive integer entered

function factorial(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i;
    }
    return total;
}

console.log(factorial(4)); // 24
