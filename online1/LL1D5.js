// 0 - Hi! Nice Weekend?!
// 1 - Context!
//   - pre:LL1
//   - now:LL1! the End!
//   - next: Stax + Queues
// 2 - Show'n'Tell
//   - InsertAt(value, idx)
//   - removeAt(idx)
//   - swap(idx1, idx2)
//   - 2nd Max
// 3 - Today
//   - Partition
//   - Remove Duplicates with/without runner
//   - Filter/Map/Reduce ... ooooh ... Lambdas!
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
    // ?????
  }

  this.length = function(){
    // ?????
  }

  this.removeBack = removeBack;

  this.removeFront = removeFront;

  this.rLength = rLength;

  this.contains = contains;
}

function removeFront(){
  // ?????????????????????????????
}

function removeBack(){
  // ?????????????????????????????
}

function rLength(){
  // ?????????????????????????????
}

function contains(val){
  // ?????????????????????????????
}

function insertAt(val, idx){
  // ????????????????
}

function removeAt(idx){
  // ?????????????????/////
}

function nextLargest(){
  // ???????????
}

function swap(nodeA, nodeB){
  // ???????????????????
}