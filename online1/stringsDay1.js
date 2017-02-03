// // STRINGS DAY 1
// 0. Happy Holidays!
// welcome to algorithms 1!
// what is:
// 	algorithms are helpful
// 	explore concepts
// 	and problem solving!
// 	get a job...nuff said
// 	fun/switch pace
// how is:
// 	lectures - 3ish days a week
// 		what does that look like?
// 		show&tell
// 		intro a Topic
// 		work on algos
// 		final thoughts
// 	whiteboard 1 time a week
// 	groups when possible
// how you do well:
// 	resources
// 	show up! do them!
// 	slack channel
// 	try different approaches
// context:
// overall - prep you for real world/interviews
// before - arrays 1
// next   - strings & A. Arrays, Linked Lists, Stacks&Queues
// Today:
//   what are strings?
//     immutable array of characaters - MARBOGAST
//     Normally, JavaScript strings are primitive values, created from literals - w3
      // immutabale?
      // primtive values?
      // literals?
var bob = 'bob';
console.log('1', bob[0])
console.log('2', bob.length)
function change_bob(string){
  string = string + 'Ross'
  console.log('3', string);
  console.log('3.5', bob);
};
change_bob(bob)
// console.log('5', bob)
// bob = 'strang'
// console.log('5.5', bob)
// var ross = 'strange'
// console.log('6', ross[4])
// ross[4] = 'F'
// console.log('7', ross)
// //   todays algos:
// //     reverse a strings
// //     remove blanks
//         // character representations
//         console.log('a' < 'W')

// Reverse a string
function revString(string){
  var result = '';
  var l = string.length -1;
  // for(var i = l; i >= 0; i--){
  //   result = result + string[i];
  // }
  while(l >= 0){
    result = result + string[l];
    l--;
  }
  return result;
}
console.log(revString('abcdefg'));
