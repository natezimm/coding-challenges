// Function counts the digits in each number to see if they have matching digits 

function sameFrequency(num1,num2){
    var digits1 = (""+num1).split("");
    var digits2 = (""+num2).split("");
    for (let i = digits1; i >= 1; i--) {
        var j = k / 10;
        var r = (num1 % k / j) - 0.5;
        var k = Math.pow(10, i);
        var result = r.toFixed(); 
        digits1.push(result);
    }
    for (let i = digits2; i >= 1; i--) {
        var j = k / 10;
        var r = (num2 % k / j) - 0.5;
        var k = Math.pow(10, i);
        var result = r.toFixed(); 
        digits2.push(result);
    }
    if(digits1.length !== digits2.length){
        return false;
    }
    for(let i = 0; i < digits1.length; i++){
        let correctIndex = digits2.indexOf(digits1[i])
        if(correctIndex === -1) {
            return false;
        }
        console.log(digits2);
        digits2.splice(correctIndex,1)
    }
    return true;
}

sameFrequency(124,421); // true
sameFrequency(124,321); // false
