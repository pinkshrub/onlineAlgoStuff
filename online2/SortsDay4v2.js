// 0. Hi! Nice Weekends I hope :]
// 1. Context!
//   Pre:  Sorts, O
//   Now:  Sorts
//   Next: Sorts Quiz,  Sets&Unions
// 2. Today!
//   a. Show'n'Tell
//   b. New Stuff
// 3. Show'n'Tell
//   a. quick
//   b. merge
//   c. radix
// 4. New Stuff
//   a. Count Sort
//   b. Shell, mostly have thinking cap ready for tomorrow




// SHOWANDTELL
function partition(array){
  var pivot = array[0];
  var left = [], middle = [], right = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > pivot) {
      right.push(array[i]);
    } else if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      middle.push(array[i]);
    }
  }
  return left + middle + right;
}

function quickSort(array){
  if (array.length < 2) {
    return array;
  }
  var left = [], mid = [], right = [];
  var pivot = array[0];
  for (var i = 0; i < array.length; i++) {
   if (array[i] < pivot) {
     left.push(array[i]);
   } else if ( array[i] > pivot) {
     right.push(array[i]);
   } else {
     mid.push(array[i]);
   }
  }
  return quickSort(left).concat(mid, quickSort(right));
}

function mergeArrays(array1, array2){
  return array1.concat(array2).sort(function(a,b){return a-b});
}

function mergeSort(array){
  if (array.length < 2) {
    return array;
  }
  var mid = Math.floor(array.length/2);
  var left = array.slice(0, mid);
  var right = array.slice(mid);
  for (var )
  return mergeSort(left).concat(mergeSort(right));
}

function radixSort(array){
  // num elements
  var l = length = array.length;
  // I think this will make it easier: turn each number to a string?
  for (var i = 0; i < l; i++) {
    array[i] = array[i].toString();
  }
  // gotta figure how many radishes to use...
  var radixes = array[0].length;
  for (var i = 0; i < l; i++){
    var numLength = array[i].length;
    if (numLength > radixes){
      radixes = numLength;
    }
  }
  // loop through radixes, i = index from end we should work on
  for (var i = 1; i <= radixes; i++){         // looping through radishes
    // for each radix, gotta do the bucket thing!
    // need 10 buckets, idx corresponds to value
    // should use a data structure specifically for this kinda work...
    var buckets = [[], [], [], [], [], [], [], [], [], []] ;
    for (var j = 0; j < l; j++){              // looping through nunmbers
      var curNum = array[j];                  // current number in array
      var digit = (curNum.length < i) ? 0 : curNum[curNum.length - i];  // gets digit we are bucketing by
      buckets[digit].push(curNum);            // puts a num in bucket
    }

    // need to empty buckets so can move to next radizx
    var arrayToBe = [];
    // if only we had an in-order flatten...
    for (var a = 0; a< 10 ; a++){
      var bs = bucketSize = buckets[a].length;
      for (var b = 0; b < bs; b++){
        arrayToBe.push(buckets[a][b]);
      }
    }
    array = arrayToBe;
  }

  return array;
}

function countSort(array){
  // what is countSort?!
  // - count how many of each thing there is
  // - put that many in, in order
}

function shellSort(array){
  // what is shellSort?
  // - insertion sort on large 'gaps'
  // - 'gaps' based knuth's formula
  // -      h = 3h + 1, h starts at 1
}

var test = [ 11, 22, 123, 432, 456, 142, 1267, 23, 45, 14, 67, 865];
console.log(radixSort(test));
