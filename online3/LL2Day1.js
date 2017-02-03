// 0. Hi Team!
// 1. Show'n'Tell
//   a. RotateString
      - Friday whiteboard adventure
//   b. Censor
//   c. StringPerms
//   d. Inorder Subsets
//   e. idx first unque character
      - donezo
// 2. Context!
//   a. Strings II
//   b. LL2..Sorry I thought trees :()
//   c. Trees I !!!
// 3. TODAY!
//   a. Show'n'Tell
//   b. Reverse a Linked Lists
//   c. kth to last
//   d. doubly linked list implementation
//   e. Over next few days: Loop checking, counting, breaking

function rotateString(str, numRotations){

}

function censor(str, badWords){

}

function anagrams(str, sub, results){

}

function subsets(str, sub, results){

}

function idxFirstUniqueChar(str){
  var pd = presenceDict = {};
  var l = length = str.length;
  for(var i = 0; i < l; i++){
    if(pd[str[i]]){
      pd[str[i]] = -1;
    } else {
      pd[str[i]] = 1;
    }
  }
  for(var i = 0; i < l; i++){
    if(pd[str[i]] > 0){
      return i;
    }
  }
  return -1;
}
