//Recursive solution to solving product of an array

function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

productOfArray([1,2,3,4]); // 24
