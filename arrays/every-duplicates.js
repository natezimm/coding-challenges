// Takes an array and returns true if there are no duplicates

function hasNoDuplicates(arr){
  return arr.every(function(val){
    return arr.indexOf(val) === arr.lastIndexOf(val)
  })
}

hasNoDuplicates([1,2,3,1]) // false
hasNoDuplicates([1,2,3]) // true
