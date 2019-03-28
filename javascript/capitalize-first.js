// Capitalize the first letter of each string in an array

function capitalizeFirst(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }
    return newArr;
}

capitalizeFirst(["hello","goodbye","happy","birthday"]); // ["Hello", "Goodbye", "Happy", "Birthday"]
