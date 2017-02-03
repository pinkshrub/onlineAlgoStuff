// 0) Hi! Nice Monday? :)
// 1) Recap: Linked Lists
// 	- isEmpty?
// 	- addFront(val)
// 2) What's up next?
// 	- Linked Lists I !!!
// 	- More 'Built-ins'
// 	- More advanced next week
// 3) Recap of OOP and LinkedLists!
// 	- Linked Lists classes and properties
// 	- OOP new/this
//  - PBV v PBR

// Node Class
function ListNode(data){
  this.data = data;
  this.next = null;
}


function LinkedList(){
  this.head = null;

  this.front = function(){
    console.log('hi world!');
    return this.head;
  }

  this.isEmpty = function(){
    return !this.head;
  }

  this.addFront = function(data){
    var newNode = new ListNode(data);
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }

  this.show = function(){
    var i = this.head;
    while(i.next != null){
      console.log(i.data, i.next.data);
      i = i.next;
    }
    return this;
  }

  this.addBack = function(data){

  }

  this.length = function(){

  }
}

var alan = new LinkedList();
alan.addFront('bob').addFront('ross').addFront('happy clouds').addFront('bravery test').addFront('beat the deveil out of it');
alan.show();
