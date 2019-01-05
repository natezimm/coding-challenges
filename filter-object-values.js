// Function searches array of objects and finds first value in array that matches the search parameter

function findInObj(arr, key, searchValue){
    return arr.filter(function(val){
        return val[key] === searchValue;
    })[0];
}

find([1,2,3,4,5], 2) // 2
find([1,2,3,4,5], 10) // undefined
