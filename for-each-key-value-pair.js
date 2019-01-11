// Function takes in array of objects and a key-value pair as parameter
// Returns new array of objects with key-value pair added to each object

function addKeyAndValue(arr,key,value){
    arr.forEach(function(val){
        val[key] = value;
    });
    return arr;
}

    addKeyAndValue([{name: 'Mike'}, {name: 'Megan'}, {name: 'Josh'}, {name: 'Lindsay'}], 'country', 'USA') 
    
    // [{name: 'Mike', country:'USA'}, {name: 'Megan', country:'USA'}, {name: 'Josh', country:'USA'}, {name: 'Lindsay', country:'USA'}]
