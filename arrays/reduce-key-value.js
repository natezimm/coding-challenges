// Takes an array of objects and adds the key and value to each object

function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc,next,idx){
        acc[idx][key] = value;
        return acc;
    },arr);
}

var arr = [{name: 'Megan'}, {name: 'Charlotte'}, {name: 'Tim'}, {name: 'Mike'}];
    
addKeyAndValue(arr, 'title', 'Teacher') // 
      [
        {title: 'Teacher', name: 'Megan'}, 
        {title: 'Teacher', name: 'Charlotte'}, 
        {title: 'Teacher', name: 'Tim'}, 
        {title: 'Teacher', name: 'Mike'}
       ]
