// Function takes a string and returns an object with counts of vowels

function vowelCount(str){
    var splitArr = str.toLowerCase().split("");
    var obj = {};
    var vowels = "aeiou";

    splitArr.forEach(function(letter){
        if(vowels.indexOf(letter) !== -1){
            if(obj[letter]){
                obj[letter]++;
            } else{
                obj[letter] = 1;
            }
        }
    });
    return obj;
}

vowelCount('Nathan') // {a:2}
vowelCount('Hello how are you') // {a:1,e:1,o:3,u:1}
vowelCount('Goodnight') // {i:1,o:2})
