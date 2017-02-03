// 0) Hi! Nice Weekend? :)
// 1) Recap: Strings & AA
// 	a. Roman Numerals
//  b. DNA transcribe
//  c. slice
//  d. longest common suffix
// 2) What's up next?
// 	- Linked Lists I !!!
// 	- Stacks & Queues
// 3) Linked Lists!
// 	- What, Why
// 		- new list structure to better use space
// 		- better at some things than array
// 			- insertion and removal anywhere but end(even then, still better i think)
// 		- worse at other things
// 			- random access
// 4) How?
// 	- OOP Basics conceptually
// 		- functional -> you add operations to fixed number of things
// 		- OO -> you add things capable operations, dont need to change existing things
// 		- should data & behavior be separate?
// 	- OOP Basics mechanically
// 		- AAs -> objects
// 			- JS 'first-class' functions
// 			- make many objects ->
// 			- constructing function ->
// 			- built-in constructor function ->
// 	- Okie, so how do we build a linked list?
// 		- 1 - ListNodes!
// 		- 2 - Structure!
// 5) Today's Mission:
// 	1 - Implement Node & List Classes!
// 		- ES5 v ES6*
// 	2 - isEmpty? && addFront(val)

// Roman Numerals with tricks
function romanize (num) {
	if (!+num)
		return false;
	var	digits = String(+num).split(""),
		key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
		       "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
		       "","I","II","III","IV","V","VI","VII","VIII","IX"],
		roman = "",
		i = 3;
	while (i--)
		roman = (key[+digits.pop() + (i * 10)] || "") + roman;
	return Array(+digits.join("") + 1).join("M") + roman;
}

function deromanize (str) {
	var	str = str.toUpperCase(),
		validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/,
		token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,
		key = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
		num = 0, m;
	if (!(str && validator.test(str)))
		return false;
	while (m = token.exec(str))
		num += key[m[0]];
	return num;
}


function romanize2(num) {
  var lookup = {M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1
  };
  var roman = '',i;
  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}
console.log(romanize(9));

console.log(deromanize('XXV'));
