// 0: Hi! :D
// 1: Show'n'Tell/Review
// 	a. split()
// 	b. join(), slice(), indexOf()?
// 2: Context
// 	a. We have learnt some strings!
//  b. Associative Arrays/Objects
// 	c. Using multiple data structures together
//  d. Linked Lists!
// 3: Today!
// 	a. Associateive Arrays! o boi!
//    - what?
//    - why?
//      - practicality (use repeated words example)
//      - speed(lookup)
//      - flexibility
//    - how?
// 	b. Arrays2Object
//  c. CoinChange


// Associative Array Playground
// Declaration/Assignment/Instantation
// var bob = {
//   // name: 'bob',
//   // last: 'ross'
// };
// // Add keys?
// bob.name = 'bob';
// bob['last'] = 'ross';
// // Add values?
// bob['key'] = 'value',
// // Mutability?
// bob['key'] = 4;
// // Read/Write?
// // console.log(bob.key, bob['name']);
// // delete stuff?
// delete bob['key'];
//
// // iteration
// for(var key in bob){
//   console.log(bob[key]);
// }

// console.log(bob);

// function join(array, glue){
//   var result = '' + array[0];
//   var length = l = array.length - 1
//   for(var i = 1; i <= l; i++){
//     result += glue + array[i];
//   }
//   return result;
// }
//
// var bob = 'abcdefg'.split('');
// console.log(join(bob, '+'));
//
// function indexOf(string, char){
//   for(var i = 0; i < string.length; i++){
//     if(string[i] == char){
//       return i;
//     }
//   }
//   return -1;
// }
//
// console.log(indexOf(bob, 'd'));


// Coin Change lvl 1
var us_currency = {
  'quarter': 25,
  'dime': 10,
  'nickel': 5,
  'penny': 1
}

function coinChange1(amount, coin_legend){
  var cl = coin_legend, amt = amount;
  var change = {};
  console.log( amt, cl['quarter']);
  // change['quarters'] = amt / cl['quarter'];
  var sum = 0;
  while(sum*cl['quarter'] <= amount){
    change['quarter'] += 1;
  }
  console.log(change);
  return change;
}

coinChange1(55, us_currency);

console.log(undefined + 1);
