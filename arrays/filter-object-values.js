// Function searches array of objects and finds first value in array

function findInObj(arr, key, searchValue){
    return arr.filter(function(val){
        return val[key] === searchValue;
    })[0];
}

findInObj([{first: 'Mike', last:"Smith"}, {first: 'Bobby', last:"Joe", isDogOwner: true}, {first: 'Joseph', last:"O'Neal"}, {first: 'Dave', last:"Garcia", isDogOwner: true}], 'isDogOwner', true) 
// {first: 'Bobby', last:"Joe", isDogOwner: true}
