// 0: Howdy! nice Mondae?!
// 1: Context!
// 	a. Stacks and Queues
// 	b. Today is Queues
// 	c. Later on we will hit other stack/queue twists
// 2: Today!
// 	a. Queues
// 		- why!!!!
// 		- what!!!
// 3: MissionTime:
// 	a. implement a queue
// 		nQ, dQ, front, etc...
// 	b. Make a Queue using 2 stacks

function privNode(data){
  var _data = data;

  this.setData = function(data){
    _data = data;
    return this;
  }

  this.getData = function(){
    return _data;
  }
}

// var bob = new privNode('BOBBERT!');
// console.log(bob);
// bob._data = 'ROSSEST!';
// console.log(bob._data);
// console.log(bob);
// console.log(bob.getData());

function Node(data){
  this.data = data;
  this.next = null;

  this.sever = function(){
    this.next = null;
    return this;
  }

}

function NodeQ(){
  this.front = null;
  this.size = 0;

  // Returns boolean of whether empty or not
  this.isEmpty = function(){
    console.log(!this.front);
    return this.front == null;
  }

  this.enqueue = function(data){
    node = (data instanceof Node) ? node : new Node(data);
    // add to back of front-linked-list-thing-structure
    if (!this.isEmpty()) {
      var cur = this.front;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = node;
    } else {
      this.front = node;
    }
    this.size += 1;
    return this;
  }
}

var bob = new NodeQ();
bob.isEmpty();
bob.enqueue('happy').isEmpty();
