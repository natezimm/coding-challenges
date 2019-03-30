//Recursive solution to find nth number in fibonacci sequence

function fib(n){
  if (n < 2) return n;
  return fib(n - 1) + fib (n - 2);
}

console.log(fib(5)); // 5
