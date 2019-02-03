// Accepts string and returns object of vowels in the string

function vowelCount(str){
    var vowels = "aeiou";
    return str.toLowerCase().split('').reduce(function(acc,next){
        if(vowels.indexOf(next) !== -1){
            if(acc[next]){
                acc[next]++;
            } else {
                acc[next] = 1;
            }
        }
        return acc;
    }, {});
}

vowelCount('Nathan') // {a:2};
vowelCount('Michael') // {a:1,e:1,i:1};
vowelCount('hello') // {e:1,o:1})
vowelCount('mmm') // {};
vowelCount('I am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
