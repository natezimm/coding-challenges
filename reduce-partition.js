// Accepts array and returns two separate arrays based on condition of callback

function partition(acc, callback){
    return arr.reduce(function(acc,next){
        if(callback(next)){
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[],[]]);
}

function isOdd(val){
  return val % 2 === 1;
}
    
var arr = [1,2,3,4,5,6,7,8];
    
partition(arr, isOdd) // [[1,3,5,7], [2,4,6,8]];
