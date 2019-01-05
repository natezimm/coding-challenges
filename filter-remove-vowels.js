// Function removes all vowels in a string and new string is all lowercased

function removeVowels(str){
    var vowels = "aeiou"
    return str.toLowerCase().split("").filter(function(val){
        return vowels.indexOf(val) === -1;
    }).join('');
}

removeVowels('Nathan') // ('nthn')
removeVowels('Function') // ('fnctn')
removeVowels('Mmmbop') // ('mmmbp')
