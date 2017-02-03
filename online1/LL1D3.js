// 0 - Hi! Nice Weekend?!
// 1 - Context!
//   - pre:LL1
//   - now:LL1
//   - next: Stax + Queues
// 2 - Show'n'Tell
//   - addBack
//   - Length
// 3 - Today
//   - recLength
//   - removeFront
//   - removeBack
//   - contains(value/info/data)
//
// SHOWANDTELL
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

  this.removeBack = removeBack;

  this.removeFront = removeFront;

  this.rLength = rLength;

  this.contains = contains;
}

function removeFront(){

}

function removeBack(){

}

function rLength(){

}

function contains(val){

}
