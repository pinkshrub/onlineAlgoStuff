var BST = require('./BST');
// var Node = require('./BSTNode');
var bob = new BST();

// isEmpty works!
// console.log(bob.isEmpty());

// add works!
bob.add(2);
// console.log(bob.isEmpty());
// console.log(bob)
bob.add(1);
// console.log(bob.root);
// console.log('************');
bob.add(3);
// console.log(bob.root);
// console.log('************');
bob.add(0).add(5);
// console.log(bob.root.left);
// console.log('************');
bob.add(1).add(2);
// console.log(bob);
// console.log(bob.root.left);

// min works!
// console.log(bob.min());

// max works
// console.log(bob.max());

// Size
// console.log(bob.root == null);
console.log(bob.isEmpty());
console.log(bob.root);
console.log(bob.size());

// displayage
// console.log(bob);
// console.log(bob.root);
// console.log(bob.isEmpty());
// console.log(bob.treeToList.pre());
