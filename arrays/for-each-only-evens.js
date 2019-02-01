// Function takes an array and returns a new array with only even values

function onlyEvenValues(arr){
    var newArr = [];
    arr.forEach(function(val){
        if(val % 2 === 0){
            newArr.push(val)
        }
    })
    return newArr;
}

onlyEvenValues([1,2,3]) // [2]
onlyEvenValues([5,1,2,3,10]) // [2,10]
