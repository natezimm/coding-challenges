// Function finds a value and returns the first element in the array that has the same value or return undefined.

function find(arr, searchValue){
    return arr.filter(function(val){
        return val === searchValue;
    })[0];
}

find([1,2,3,4,5], 3) // 3
find([1,2,3,4,5], 10) // undefined
