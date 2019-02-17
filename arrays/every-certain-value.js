// Takes an array and returns true if every object has that search value

function hasCertainValue(arr, key, searchValue){
  return arr.every(function(val){
    return val[key] === searchValue;
  })
}

var arr = [
        {title: "Teacher", first: 'Mike', last:"Smith"}, 
        {title: "Teacher", first: 'Sara', last:"Love", isDogOwner: true}, 
        {title: "Teacher", first: 'Bob', last:"Hayward"}, 
        {title: "Teacher", first: 'Laura', last:"Smart", isDogOwner: true}
    ]

hasCertainKey(arr,'title', 'Teacher') // true
hasCertainKey(arr,'first', 'Bob) // false
