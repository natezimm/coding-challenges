// Function determines which characters and how many of each characters are used in a string.

function charCount(str) {
    var obj = {};
    for (var i = 0; i < str.length; i++){
        var char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)){
            if (obj[char] > 0){
                obj[char]++;
            } else {
                obj[char] = 1;
            };
        }
    }
    return obj;
}

console.log(charCount("Put your string here."));
