0. Hi Team!
1. Last year:
  - Arrays II!
  - Matrix Manipulations
2. This year:
  - Strings II
  - Recursion
  - Trees
3. Structure changes/tweaks
  - 'whiteboarding'
  - more 'take-home-y'
    - 1 day of intro/coverage
    - 1 day of reviewing things people had fun/stuck on
    - 1 day of whiteboarding
4. Context!
  a. see #1
  b. see #2
  c. TODAY!
    - rotateString
        Create a standalone function that accepts a string and an integer, and rotates the characters in the string by that amount. Example: given ('Boris Godunov', 5), you should return 'dunovBoris Go'.
        Lvl 2: No built-ins
        Lvl 3: Handle negative numbers to shift left!
    - censor
        Create a function that, given string and array of 'naughty words', return new string with naughty words changed to 'x' chars. Given ('Snap crackle pop nincompoop!', ['crack', 'poop']), you should return 'Snap xxxxxle pop nincomxxxx!' (after giggling a bit).
        Lvl 2. handle capitalization appropriately

        - for Friday: recursive ALl string permutations
                      String in-order subsets from recursion chapter

'abcdefg', 2   => 'fgabcde'
'abcdefg', -2  => 'cdefgab'

// no restrictions
function rotateString1(string, rotations){
  var i = 0, split_string = string.split();
  while(i < rotations){
    split_string.push(split_string.shift());
    i++;
  }
  return split_string.join('');
}

// no built-ins
function rotateString2(string, rotations){
  var newStr = '', length = string.length();
  while(rotations >= 0){

  }
}

// negatives go left
function rotateString3(string, rotations){

}

// nocapsworrying!
function censor1(string, badWords){

}

// caps matter, yo!
function censor2(string, badWords){

}

calm down atom!
