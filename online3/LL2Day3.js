// 0. Hi Team!
// 1. Show'n'Tell
//  - DLL?
//  - Leo Interview
// 2. Context!
//   a. LL2
//   b. Whiteboarding/
//   c. Trees I !!!
// 3. TODAY!
//   a. Show'n'Tell
//   b. Whiteboarding

function DLNode(data){
  // attributes
  this.data = data;
  this.next = null;
  this.prev = null;

  // methods?
  this.sever = function(){
    this.prev.next = this.next;
    this.next.prev = this.prev;
    this.next = null;
    this.prev = null;
    return this;
  }
}

function DLL(){
  // atrributes
  this.head = null;
  this.tail = null;
  this.length = 0;

  // methods(CRUD+)
  // Create(insertions)
  var _validateNode = function(input){
    if (input instanceof DLNode){
      return input;
    } else {
      return new DLNode(input);
    }
  }

  var _insertionEndCheck = function(f, node){
    var new_node = _validateNode(node);
    if (this.isEmpty()){
      this.head = new_node;
      this.tail = this.head;
    } else {
      f(node);
    }
    return this;
  }

  var addFront = function(node){
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    return this;

  }

  var addBack = function(node){
    this.tail.next = new_node;
    new_node.prev = this.tail;

  }

  this.addFront() = _insertionEndCheck(addFront, value);

  this.addBack(value) = function(node){

  }

  // reads + updates(list manipulations)
  this.isEmpty() = function(){
    return !!this.head
  }



  // delete(removals)

}
