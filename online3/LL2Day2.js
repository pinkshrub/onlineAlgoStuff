// 0. Hi Team!
// 1. Show'n'Tell
//  - reverse LL
//  - kth to last
//  - DLL
//  - loops
// 2. Context!
//   a. LL2
//   b. LL2 Check-In
//   c. Trees I !!!
//   d. Friday - Whiteboard Mode(RotateString)
// 3. TODAY!
//   a. Show'n'Tell

// This function declares the Node class.
function Node(val){
  this.val = val;
  this.next = null;
}


// This function declares the Singly Linked List class.
function SLL(){
  this.head = null;

  // The .show() method will print each node to the end of the linked list.
  this.show = function(){
    if(!this.head){
      return "Empty list.";
    }
    var index = 0;
    console.log("Index " + index, this.head.val);
    var currentNode = this.head;
    while(currentNode.next){
      index++;
      currentNode = currentNode.next;
      console.log("Index " + index, currentNode.val);
    }
    return "List length is " + (index + 1);
  };

  // DONE: Method to show if the singly linked list has any nodes.
  this.isEmpty = function(){
    if(this.head === null){
      return true;
    }
    return false;
  };

  // DONE: Method to add a node to the front of the singly linked list.
  this.addFront = function(val){
    //console.log("addFront");
    var node = new Node(val);
    if (this.head === null){
      this.head = node;
      return this;
    }
    node = new Node(val);
    node.next = this.head;
    this.head = node;
    return this;
  };

  // DONE: Method to return the front node value of the singly linked list.
  this.front = function(){
    if(this.head === null){
      return null;
    }
    return this.head.val;
  };

  // DONE: Return back function
  this.back = function(){
    var currentNode = this.head;
    if(!currentNode){
      return "No Nodes";
    }
    while(currentNode){
      if(currentNode.next === null){
        back = currentNode;
        return this;
      }
      currentNode = currentNode.next;
    }
  };

  // DONE: This function removes the front node of the singly linked list and moves
  // the next node to the front of the list.
  this.removeFront = function(){
    if(!this.head){
      return "No nodes!";
    }
    var result = this.head;
    this.head = this.head.next;
    return result;
  };

  // DONE: removeBack() Implement a linked list method that removes the last
  // node in a linked list.  If the list is empty return null

  this.removeBack = function(){
    console.log("removeBack");
    if(this.isEmpty()){
      return null;
    }
    var currentNode = this.head;
    while(currentNode.next){
      if(!currentNode.next.next){
        // This is where I do something.
        result = currentNode.next;
        currentNode.next = null;
        return result;
      }
    currentNode = currentNode.next;
    }
  };

  //DONE: Contains value passed in method.
  this.contains = function(val){
    var currentNode = this.head;
    while(currentNode){
      if(currentNode.val === val){
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  // DONE: This method returns the length of the singly linked list.
  this.length = function(){
    var currentNode = this.head;
    var count = 0;
    while (currentNode !== null){
      count += 1;
      currentNode = currentNode.next;
      console.log(currentNode);
    }
    return count;
  };

  // DONE: ADDBACK(VAL) that adds a new Node, with the passed in value, to
  // the back of the linked list.
  this.addBack = function(val){
    if(!this.head){
      this.head = new Node(val);
      return this;
    }
    var currentNode = this.head;
    while(currentNode.next){
      currentNode = currentNode.next;
    }
    // If the current node.next is null, this is the end of the linked list,
    // in this case, add the new node as currentNode.next
    currentNode.next = new Node(val);
    return this;
  };

  // DONE: REMOVE(VAL)
  // Next, implement .removeVal(val). This function will remove the first node
  // containing the passed in val and return "node removed" without damaging the
  // rest of the list. If the list does not contain a node with the passed in
  // value, return "no node removed".
  this.remove = function(val){
    var currentNode = this.head;
    if(!currentNode){
      return "No Nodes";
    }
    // While a node exists in the linked list
    while(currentNode){
      // If there is a next node, check the value of that next node (we will
      // have to change the next pointer of the current node if the value is
      // the target node we wish to remove)
      if(currentNode.next){
        // If the value of the next node is equal to our test case...
        if(currentNode.next.val === val){
          // Capture the node we wish to remove as node
          var node = currentNode.next;
          // Change the current node.next assignment to be that of the
          // next.next so we can remove our target node.
          currentNode.next = currentNode.next.next;
          // Remove the next assignment of the removed node
          node.next = null;
          // Return the removed node
          return node;
        }
      }
      // Everytime the loop occurs, use the following line to advance the while
      // loop
      currentNode = currentNode.next;
    }
    // Once looped through the entire linked list, if the target number is not
    // found, return and indication the target was not found.
    return "No node with that number";
  };

  // DONE: INSERT_AT(INDEX, VAL) Given an index and a value, implement
  // .insert_at(index,val) that inserts a node with that value at that index.
  // You can treat the first node as being index 0. If the index is out of
  // range, return "index out of range" , otherwise return the list.

  this.insertAt = function(index, val){
    //console.log('Insert At!');
    if(index === 0){
      this.addFront(val);
      return this;
    }
    var currentNode = this.head;
    var count = 0;
    //console.log(index);
    while(count < index - 1  && currentNode){
      currentNode = currentNode.next;
      count++;
    }
    //console.log(count);
    //console.log(index);
    if(count === index -1 && currentNode){
      node = new Node(val);
      node.next = currentNode.next;
      currentNode.next = node;
      return this;
    }
    return "Index out of range.";
  };

  // TODO: REMOVE_AT(INDEX) Given an index, implement .remove_at(index) that
  // removes a node at that index. Again, treat the first node as being index
  // 0.  If the index is out of range, return "index out of range" , otherwise
  // return the list.

  this.removeAt = function(index){
    console.log("Remove At " + index);
    if(index === 0){
      this.removeFront();
      return this;
    }
    console.log("here");
    var currentNode = this.head;
    var count = 0;
    while(count < index - 1  && currentNode){
      currentNode = currentNode.next;
      count++;
    }
    console.log("exit while");
    if(count === index -1 && currentNode.next){
      // TODO: What to do when there is no .next.next
      // Right now, I'm getting an error.
      currentNode.next = currentNode.next.next;
      return this;
    }
    console.log("after final if");
    return "Index out of range.";
  };

  // DONE: As part of the bubbleSort function, I will need an is sorted
  // status... I'm thinking I could just make a method here later...
  this.isSorted = function(){
    console.log("isSorted");
    if (!this.head){
      return 'No nodes to sort.';
    }
    var currentNode = this.head;
    while(currentNode.next){
      if(currentNode.val > currentNode.next.val){
        return false;
      }
      currentNode = currentNode.next;
    }
    return true;
  };
}

var sll1 = new SLL();
sll1.addBack(2);
sll1.addFront(2);
sll1.addFront(44);
sll1.insertAt(0,27);
sll1.insertAt(1,78);
sll1.addFront(3);
sll1.addBack(9);
sll1.addFront(4);
sll1.addFront(5);
sll1.show();



function reverseLinkedList(list){
  //console.log('rLL');
  var list2 = new SLL();
  while(!list.isEmpty()){
    //console.log('\n');
    var temp = list.removeFront();
    //console.log(temp);
    list2.addFront(temp.val);
    //list2.show();
  }
  //list2.show();
  return list2;
}

console.log("\n");
var sll2 = new SLL();
sll2 = reverseLinkedList(sll1);
sll2.show();
