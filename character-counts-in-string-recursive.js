//Function counts amount of each letter in string

function charCount(str) {
    var obj = {};
    for (var char of str){
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)){
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

console.log(charCount("Put your string here."));
