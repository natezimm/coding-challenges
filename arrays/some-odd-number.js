// Takes array and returns boolean of whether array has an odd number

function hasOddNumber(arr){
  return arr.some(function(val){
    return val % 2 !== 0;
  })
}

hasOddNumber([5,8,6,4,2,12,4]) // true
hasOddNumber([24,22,2,20,24,34]) // false
