
function rotateArray(array, shift) {
  // console.log('initial array is: ' + array);
  shift = shift || 1;
  var len = array.length;
  shift = shift % len;
  console.log('shift is: ' + shift);
  // Trick is to 'juggle'
  // Need to find an interval we can use that will allow us to efficiently traverse the array in a happy way
  var interval = gcd(len, shift);
  function gcd(num1, num2) {
    var gcd = num1 >= num2 ? num1 : num2;
    for (gcd ; gcd > 1; gcd--) {
      if (num1 % gcd === 0 && num2 % gcd === 0) {
        console.log('gcd of ,' + num1 + ' and ' + num2 + ' is ' + gcd);
        return gcd;
      }
    }
    // console.log('here')
    console.log('gcd of ' + num1 + ' and ' + num2 + ' is ' + gcd);
    return gcd;
  }

  // Outer loop advances us through 'sets'
  var touches = 0;
  for ( var startOfSet = 0; startOfSet < interval; startOfSet++){
    // console.log('sos:'+startOfSet+' interval '+interval);
    // console.log(array);
    // inner loop advances us through each set for swapping
    // temp is value we are juggling around
    var t = array[startOfSet];
    var setIndex = startOfSet;
    while (1) {
      // console.log(array);
      var index = setIndex + shift >= len ? setIndex + shift - len : setIndex + shift;
      if (index == startOfSet) {
        break;
      }
      // console.log(setIndex + ' ' + index);
      touches++;
      array[setIndex] = array[index];
      setIndex = index;
    }
    // console.log(array);
    touches++;
    array[setIndex] = t;

  }
  // console.log(array);
  // console.log('end is: ', array);
  console.log('touches: '+ touches +' length '+ len);
}

function makeArray(length) {
  var result = [];
  while (length) {
    result.push(Math.floor(Math.random()*10));
    length--;
  }
  return result;
}
var bob = makeArray(3000);
rotateArray(bob,39);
