// Function takes in an array of strings and returns new array with only first and last character of each string

function showFirstAndLast(arr){
    var newArr = [];
    arr.forEach(function(val){
        newArr.push(val[0] + val[val.length-1])
    });
    return newArr;
}

showFirstAndLast(['bob','nathan', 'sarah', 'michelle']) // ["bb", "nn", "sh", "me"]
showFirstAndLast(['hello', 'hola', 'bonjour']) // ['ho', 'ha', 'br']
