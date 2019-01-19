// Takes an array of objects and returns new array with value of that key in each object

function extractValue(arr,key){
  return arr.map(function(val){
      return val[key];
  });
}

extractKey([{name: 'Mike'}, {name: 'Michelle'}, {name: 'Bob'}, {name: 'Tara'}], 'name') // ['Mike', 'Michelle', 'Bob', 'Tara']
