// 0: Hi! :D
// 1: Show'n'Tell/Review
// 	a. bracecsValid()
// 	b. isAlphabetical?()
//  c. bookIndex()
// 2: Context
// 	a. Associative Arrays
//  b. Last Day of C.4!
//  d. Linked Lists!
// 3: Today!
// 	a. Roman Numerals
//  b. DNA transcribe
//  c. slice
//  d. longest common suffix


function bracesValid(str){
  var pd = pairDict = {
    '}' : '{',
    ')' : '(',
    ']' : '['
  }
  var stack = [];
  var l = str.length;
  for(var i = 0; i < l; i++){
    var char = str[i];
    if(char == '{' || char == '(' || char == '['){
      stack.push(char);
    } else if(pd[char]){
      if(pd[char] != stack.pop()){
        return false;
      }
    }
  }
  return stack.length === 0;
}

var t1 = test1 = '((({{{{{{[[[]]]}}}}}})))';
var t2 = test2 = '(((([))))';
var t3 = test3 = '({)';
var t4 = test4 = '{{{({({[([{}])]})})}}}';

console.log(bracesValid(t1));
console.log(bracesValid(t2));
console.log(bracesValid(t3));
console.log(bracesValid(t4));

function isAlphabetical(str){
  var ls = lowercaseString = str.toLowerCase();
  var l = length = str.length -1;
  for(var i = 0; i < l; i++){
    if(str.charCodeAt(i) > str.charCodeAt(i+1)){
      return false;
    }
  }
  return true;
}

function bookIndex (pages) {
    var output = "";
    if (!pages.length) {
        // Nothing to see here folks
        return output;
    }

    output += pages[0];
    for (var i = 1; i < pages.length; i++) {
        if (pages[i - 1] < pages[i] - 1) {
            // Look back -- Should I add a comma?
            output += ", " + pages[i];
        } else if (pages[i + 1] === pages[i] + 1) {
            // Look foward -- Should I add a dash?
            if (output[output.length - 1] !== "-") {
                output += "-";
            }
        } else {
            // Add me
            output += pages[i];
        }
    }
    return output;
}
