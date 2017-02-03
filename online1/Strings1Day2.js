// STRINGS DAY 2!
// 0. HAPPY FRICKIN TUESDAY Y'ALL!
// 1. Context! 'Cuz it helps
  // a. Yesterday!
  //   We did some string learning!
  //   a. ReverseString BOOM! DID THAT!
  //   b. Remove Blanks!
  // b. Today
  //   a. isPalindrome
  //   b. getDigits()
  // c. Going Forth!
  //   a. Built Ins!!!! wooooooooooo!
  // 2. LETS. GET. DOING!
  //   A. SHOW AND TELL!
  //     1. Lemme know about dat remBlanks()
  //   B. isPalindrome()
  //   C. getDigits()
  // 3. Yo. it was a gud day, but gotta learn up others now!
  //   a. HASTA PASTA
  //   b. THANK YOU TYPISTS!

function revString1(string){
  var result = '';
  var l = string.length -1;
  for(var i = l; i >= 0; i--){
    result = result + string[i];
  }
  return result;
}

function revString2(string){
  var result = '';
  var l = string.length - 1;
  while(l >= 0){
    result = result + string[l--];
  }
  return result;
}
console.log(revString2('baboom'));

function trim1(string){
  var result = '';
  var l = string.length -1;
  for(var i = 0; i <= l; i++){
    if(string[i] == '\n'|| string[i] == ' '|| string[i] == '\t'){
      result = result + string[i];
    }
  }
  return result;
}
