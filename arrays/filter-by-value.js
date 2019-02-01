// Filters array of objects and keys to return a new array with all objects that conatin that key

function filterByValue(arr,key){
    return arr.filter(function(val){
        return val[key] !== undefined;
    });
}

filterByValue([{first: 'Mike', last:"Smith"}, {first: 'Bobby', last:"Joe", isDogOwner: true}, {first: 'Joseph', last:"O'Neal"}, {first: 'Dave', last:"Garcia", isDogOwner: true}], 'isDogOwner') 
// [{first: 'Bobby', last:"Joe", isDogOwner: true}, {first: 'Dave', last:"Garcia", isDogOwner: true}]
