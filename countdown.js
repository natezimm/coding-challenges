// Iterative countdown to all done.

function countDown(num){
    for(var i = num; i > 0; i--){
        console.log(i);
    }
    console.log("All done!");
}

console.log(countDown(10));
