// Function takes an array and returns an array that is doubled

function doubleValues(arr){
  return arr.map(function(val){
      return val * 2
  });
}

doubleValues([2,9,15]) // [4,18,30]
doubleValues([13,-7,-5]) // [26,-14,-10]
