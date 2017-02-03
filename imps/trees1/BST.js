var Node = require('./BSTNode.js');


function BST() {

  this.root = null;

  this.isEmpty = function() {
    return (!this.root);
  }

  this.add = function(data) {
    var n = new Node(data);
    if (this.isEmpty()) {
      this.root = n;
    } else {
      var cur = this.root;
      var tc = targetChild = (cur.data >= data) ? cur.left : cur.right;
      while (tc) {
        cur = tc;
        tc = (data >= cur.data) ? cur.right : cur.left;
      }
      if (cur.data <= data) {
        cur.right = n;
      } else {
         cur.left = n;
      }
    }
    return this;
  }

  this.min = function() {
    if (this.isEmpty()){
      return this.root;
    } else {
      var cur = this.root;
      while(cur.left){
        cur = cur.left;
      }
      return cur.data;
    }
  }

  this.max = function() {
    if (this.isEmpty()){
      return this.root;
    } else {
      var cur = this.root;
      while (cur.right) {
        cur = cur.right;
      }
      return cur.data;
    }
  }

  this.size = function() {
    var size = 0;
    function count(node) {
      console.log('counted');
      if (node) {
        size += !!this.left + !!this.right;
        count(this.left);
        count(this.right);
      }
    }
    console.log('The list is empty: ', this.isEmpty())
    if (!this.isEmpty()) {
      console.log('is try count')
      count(this.root);
    }
    return size;
  }

  this.treeToList = {};
  this.treeToList['pre'] = function(){
    var result = [];
    console.log('1st root is: ', this.root);
    if (!this.isEmpty) {
      function preOrder(node) {
        if (node) {
          result.push(node.data);
          preOrder(node.left);
          preOrder(node.right);
        }
      }
      console.log('root is: ', this.root);
      preOrder(this.root);
    }
    return result;
  }

  this.treeToList['in'] = function(){
    var result = [];
    if (!this.isEmpty()) {
      function inOrder(node) {
        while (node) {
          inOrder(node.left);
          result.push(node.data);
          inOrder(node.right);
        }
      }
      inOrder(this.root);
    }
    return result;
  }

  this.treeToList['post'] = function(){
    var result = [];
    if (!this.isEmpty) {
      function postOrder(node) {
        while (node) {
          postOrder(this.left);
          postOrder(this.right);
          result.push(node.data);
        }
      }
      postOrder(this.root);
    }
    return result;
  }

}

module.exports = BST;
