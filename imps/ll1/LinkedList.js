// Linked List 1 Implementation

// TODO: ES6 + Solid Designing

var Node = require('./ListNode.js');


function LinkedList(){
  this.head = null;

  // isEmpty
  this.isEmpty = function(){
    return !!this.head;
  }

  // Add Front
  this.addFront = function(data){
    var n = new Node(data);
    n.next = this.isEmpty() ? null : this.head;
    this.head = n;
    return this
  }

  // Contains
  this.contains = function(data){
    if (this.isEmpty()){
      return false;
    }
    var cur = this.head;
    while (cur){
      if (cur.data == data){
        return true;
      }
      cur = cur.next;
    }
    return false;
  }

  // Remove Front
  this.removeFront = function(){
    if(!this.isEmpty()){
      var t = this.head;
      this.head = this.head.next;
      t.next = null;
    }
    return this;
  }

  // Front
  this.front = function(){
    if (!this.isEmpty()){
      return this.head.data;
    }
    return this.head;
  }

  // Length
  this.length = function(){
    var count = 0;
    var cur = this.head;
    while(cur){
      count++;
      cur = cur.next;
    }
    return count;
  }

  // Display
  this.display = function(){
    var cur = this.head;
    while(cur){
      console.log([cur.data, cur.next]);
      cur = cur.next;
    }
    return this;
  }

  // Max
  this.Max = function(){
    var max = null;
    if (!this.isEmpty()){
      max = this.head.data;
      cur = this.head;
      while (cur){
        if (cur.data > max){
          max = cur.data;
        }
        cur = cur.next;
      }
    }
    return max;
  }

  // Min
  this.Min = function(){
    var min = null;
    if (!this.isEmpty()){
      min = this.head.data;
      cur = this.head;
      while (cur){
        if (cur.data < min){
          min = cur.data;
        }
        cur = cur.next;
      }
    }
    return min;
  }

  // Average
  this.average = function(){
    var sum = 0;
    if (!this.isEmpty()){
      var cur = this.head;
      while (cur){
        sum += cur.data;
        cur = cur.next;
      }
    }
    return sum/this.length();
  }

  // Back
  this.back = function(){
    if (!this.isEmpty()){
      var cur = this.head;
      while (cur.next){
        cur = cur.next;
      }
      return cur.data;
    }
    return null;
  }

  // Remove Back
  this.removeBack = function(){
    if (!this.isEmpty()){
      var cur = this.head;
      while (cur.next.next){
        cur = cur.next;
      }
      cur.next = null;
    }
    return this;
  }

  // Add Back
  this.addBack = function(data){
    var n = new Node(data);
    if (this.isEmpty()){
      this.head = n;
    } else {
      var cur = this.head;
      while (cur.next){
        cur = cur.next;
      }
      cur.next = n;
    }
    return this;
  }

  // Prepend Val
  this.prependVal = function(data, val){
    if (!this.contains(val)){
      console.log('Could not find value to prepend!');
    } else {
      var n = new Node(data);
      var cur = this.head;
      while (cur.next.data != val){
        cur = cur.next;
      }
      n.next = cur.next;
      cur.next = n;
    }
    return this;
  }

  // Append Val
  this.appendVal = function(data, val){
    if (!this.contains(val)){
      console.log('Could not find value to append!');
    } else {
      var n = new Node(data);
      var cur = this.head;
      while (cur.data != val){
        cur = cur.next;
      }
      n.next = cur.next;
      cur.next = n;
    }
    return this;
  }

  // Remove Val
  this.removeVal = function(val){
    if (this.contains(val)){
      if (this.head.data == val){
        this.removeFront();
      }
      var cur = this.head;
      while (cur.next){
        if (cur.next.data == val){
          var t = cur.next;
          cur.next = cur.next.next;
          break;
        }
        cur = cur.next;
      }
    }
    return this;
  }

  // Remove Negatives
  this.removeNegatives = function(){
    if(!this.isEmpty()){
      while (this.head.data < 0){
        this.removeFront();
      }
      var cur = this.head;
      while (cur.next){
        if (cur.next.data < 0){
          var t = cur.next;
          cur.next = cur.next.next;
          t.next = null
        }
        cur = cur.next;
      }
      return this;
    }
  }

  // Concat
  this.concat = function(node){
    if (node instanceof LinkedList){
      node = node.head;
    }
    this.addBack(node);
    return this;
  }

  // Partition
  this.partition = function(val){
    if (!this.isEmpty()){
      if (!val){
        val = this.head.data;
      }
      var lesser = new LinkedList();
      var equaler = new LinkedList();
      var greater = new LinedList();
      var cur = this.head;
      while (cur){
        if (cur.data < val){
          lesser.addBack(cur.data);
        } else if (cur.data == val){
          equaler.addBack(cur.data);
        } else {
          greater.addBack(cur.data);
        }
      }
      this.head = lesser.concat(equaler).concat(greater).head;
    }
    return this;
  }

  // Second to Last Value
  this.secondToLast = function(){
    if (this.length() < 2){
      console.log('no penultimate node!');
      return this;
    } else {
      var cur = this.head;
      while (cur.next.next){
        cur = cur.next;
      }
      return cur;
    }
  }

  // Copy
  this.copy = function(){
    var result = new LinkedList();
    if (!this.isEmpty){
      var cur = this.head;
      while(cur){
        result.addBack(cur.data);
      }
    }
    return result;
  }

  // Filter
  this.filter = function(callback){
    if (!this.isEmpty()){
      var cur = this.head;
      callback(cur);
      cur = cur.next;
    }
    return this;
  }

}
