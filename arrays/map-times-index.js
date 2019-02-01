// Takes an array and returns new array with values multiplied by their index

function valTimesIndex(arr){
  return arr.map(function(val,idx){
      return val*idx;
  })
}

valTimesIndex([1,2,3]) // [0,2,6]
valTimesIndex([1,-2,-3]) // [0,-2,-6]
