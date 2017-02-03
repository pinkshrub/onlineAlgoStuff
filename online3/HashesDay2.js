0: Howdy! How black-belts go?ing?
1: Context!
  - Pre:  Hashes, basic functions and basic hashing function
  - Now:  Hashes, Sets
  - Next: PriorityQ & Heap, Algs IV + Dylan/Michael - time 2pm?!?

2: Show&Tell
  - HashTable class
    - add
    - isEmpty
    - find key
    - remove
    - grow
    - setsize
    - selectkeys
    - addmap

3: Today!
    - Map: Key, Value
    - Set: Values
    - SetsIn10minutes:
    - Vocabulary!
      - Set
      - Intersection
      - Union
      - Multiset
      - Ordered
        - Data Structures?
      - Unordered
        - Data Structures?
      - retrieval v storageMethod(UvO) v relational operations
    - Map: allows duplicate values
    - MultiMap: allows duplicate keys
    - Homeworks:
      - finish HashMap
      - MultiMap
      - Sets:
        - Minimal N-Array Range
        - MultiSet union of sorted Arrays
        - Stuff Michael and Nick were talking about this morning




function HashMap(){
  this.table = Array.apply([], {length: 131});
  var table_sequence = [];

  this.hashFunction = function(key, value) {
    var result = 0;
    for (var i = 0; i < key.length; i++) {
      var char = key.charCodeAt(i);
      result = ((result<<5)-result)+char;

    }
  }

}
