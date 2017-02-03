// Basicest Unsecure Node
var Node = require('./ListNode.js');
console.log(Node());
var bob = Node('bob');
console.log(bob);
console.log(bob.data);
console.log(bob.next);

function NodeList(){
	this.head = null;

	this.isEmpty = isEmpty;
	this.addFront = addFront;
}

function isEmpty(){
	return !this.head;
}

function addFont(data){
	n = new Node(data);
	if(this.head){
		n.next = this.head;
		this.head = n;
	} else {
		this.head = n;
	}
	return this;
}

// non-recursive
function length(){
	var count = 0;
	if(this.head){
		var cur = this.head;
		while(cur){
			count++;
			cur = cur.next;
		}
	}
	return count;
}

function addBack(data){
	var n = new Node(data);
	if(this.head){
		var cur = this.head;
		while(cur.next){
			cur = cur.next;
		}
		cur.next = n;
	} else {
		this.head = n;
	}
	return this;
}