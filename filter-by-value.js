// Filters array of objects and keys to return a new array with all objects that conatin that key

function filterByValue(arr,key){
    return arr.filter(function(val){
        return val[key] !== undefined;
    });
}
