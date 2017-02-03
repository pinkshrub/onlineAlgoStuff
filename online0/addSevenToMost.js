// Build function that accepts array. Return a new array with all values except
// first, adding 7 to each. Do not alter the original array

// My implementation
function sevenToMost2(arr){
  var result = [];
  var l = arr.length;
  for(var i = 1; i < l; i++){
    result.push(arr[i]+7);
  }
  return result;
}

// Kyle P's Code
function sevenToMost(arr){
  newArr=arr;
  newArr.shift();
  for (var i = 0; i < newArr.length; i++){
   newArr[i]+=7;
  }
  console.log(newArr)
  return newArr;
}


var inArray = [1,2,3,4,5];
function whatGoesOn(paramaterArray){
  outArray = paramaterArray;
  outArray.shift();
  var l = outArray.length;
  console.log('Stage 1');
  console.log(paramaterArray);
  console.log(inArray);
  console.log(outArray);
  for(var i = 0; i < l; i++){
    outArray[i]+= 7;
  }
  console.log('Stage 2');
  console.log(paramaterArray);
  console.log(inArray);
  console.log(outArray);
  return outArray;
}


whatGoesOn(inArray);
console.log('Stage 3');
// console.log(paramaterArray);
console.log(inArray);
console.log(outArray);
