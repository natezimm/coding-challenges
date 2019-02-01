// Takes an array of objects of names and returns new array of concatenated names with space

function extractFullName(arr){
  return arr.map(function(val){
    return val.first + " " + val.last;
  });
}

extractFullName([{first: 'Mike', last:"Smith"}, {first: 'Sara', last:"Barry"}, {first: 'Tom', last:"Brady"}, {first: 'Lindsay', last:"Hill"}]) 
// ['Mike Smith', 'Sara Barry', 'Tom Brady', 'Lindsay Hill']
