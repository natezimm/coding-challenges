// Takes an array and returns true if every object has a certain key

function hasCertainKey(arr, key){
  return arr.every(function(val){
    return key in val
  })
}

var arr = [
        {title: "Teacher", first: 'Mike', last:"Smith"}, 
        {title: "Teacher", first: 'Sara', last:"Love", isDogOwner: true}, 
        {title: "Teacher", first: 'Bob', last:"Hayward"}, 
        {title: "Teacher", first: 'Laura', last:"Smart", isDogOwner: true}
    ]

hasCertainKey(arr,'first') // true
hasCertainKey(arr,'isDogOwner') // false
