// Capitalize all letters in each string of an array

function capitalizeWords(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i].toUpperCase());
    }
    return newArr;
}

capitalizeWords(["hello","goodbye","happy","birthday"]); // ["HELLO", "GOODBYE", "HAPPY", "BIRTHDAY"]
