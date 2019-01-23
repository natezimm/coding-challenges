// Takes an array of objects and returns new array with values at a certain key

function extractValue(arr, key){
    return arr.reduce(function(acc,next){
        acc.push(next[key]);
        return acc;
    },[]);
}

    var arr = [{name: 'Tracy'}, {name: 'Zach'}, {name: 'Layla'}, {name: 'Carson'}]
    extractValue(arr,'name') // ['Tracy', 'Zach', 'Layla', 'Carson']
