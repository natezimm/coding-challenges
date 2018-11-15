// Given an array, count the amount of unique values within it.

function countUniqueValues(arr){
    let left = 0;
    let right = 1;
    let count = 1;
    while(right < arr.length){
        if(arr[left] === arr [right]){
            right++;
        }
        if(arr[left] !== arr[right]){
            left++;
            arr[left] = arr[right];
            right++;
            count++;
        }
    }
    console.log("Number of unique values: " + count);
    return count;
}

countUniqueValues([1,1,3,3,3,5]);    // 3
