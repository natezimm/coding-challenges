// Function that finds product of an array

function productOfArray(arr){
    var product = 1;
    for(var i = 0; i < arr.length; i++){
        product *= arr[i];
    }
    return product;
}

productOfArray([1,2,3,4]); // 24
