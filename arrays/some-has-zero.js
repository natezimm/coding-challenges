// Takes a number and determines if it contains a zero

function hasAZero(num){
  return num.toString().split('').some(function(val){
    return val === '0';
  })
}

hasAZero(5219879032523523) // true
hasAZero(12132367247135) // false
