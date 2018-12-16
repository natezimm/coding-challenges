//Function to determine if a given number is an average of any two items in an array

function averagePair(arr, num){
  let start = 0;
  let end = arr.length-1;
  while(start < end){
    let avg = (arr[start]+arr[end]) / 2 
    if(avg === num) return true;
    else if(avg < num) start++
    else end--
  }
  return false;
}

averagePair([1,2,3,4,5], 2); // true
averagePair([1,2,3,4,5], 2.5); // true
averagePair([1,2,3,4,5], 2.2); // false
