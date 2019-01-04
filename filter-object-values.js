// Function searches array of objects and finds first value in array

function findInObj(arr, key, searchValue){
    return arr.filter(function(val){
        return val[key] === searchValue;
    })[0];
}
