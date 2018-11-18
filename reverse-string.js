// Reverse a string input

function reverse(str){
    var strArr = [];
    for(var i = 0; i < str.length; i++){
        strArr.push(str[i]);
    }
    var revStr = "";
    for(var j = str.length - 1; j >= 0; j--){
        revStr += (strArr[j]);
    }
    return revStr;
}

reverse("awesome");
