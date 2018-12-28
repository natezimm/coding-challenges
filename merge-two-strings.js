// Alternatively merge strings  

function mergeStrings(a, b){
    var minLength = Math.min(a.length, b.length);
    var mergedStringArr = [];

    for(let i = 0; i < minLength; i++){
        mergedStringArr.push(a[i], b[i]);
    }
    mergedStringArr.push(...a.slice(minLength),...b.slice(minLength));    

    var mergedString = "";

    for(let j = 0; j < mergedStringArr.length; j++){
        mergedString += (mergedStringArr[j]);
    }
    
    return mergedString;
}

mergeStrings("abc","defgh");
