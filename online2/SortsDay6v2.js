// 0. Hi! Hopes for nice monday and a continually improvign tuesday :D
// 1. Context!
//   - pre:  Sorts, O
//   - now:  Last day of Sorts
//   - post: Strings2
//
// 2. Show'N'Tell
//   a. CountSort
//   b. ShellSort
//
// 3. Today!
//   a. O(???)
      function printUnorderedPairs(array){
        for(var i = 0; i < array.length; i++){
          for(var j = i + 1; j < array.length; j++){
            console.log(array[i]+ ' ' +array[j]);
          }
        }
      }
//   b.What is equivalent to O(N)?
      // - O(N + P)
      // - O(2N)
      // - O(N + log N)
      // - O(N + M)

//   c. Sort       |    O    | in place?
        // bubble   N2            y
        // insert   N2            y
        // select   N2
        // radix    NK            y
        // count    N+K           y
        // quick    N2
        // merge    n log(n)      m
        // pancake  ?
        // shell    n logn  2

//
// 4. Homework!
//   a. QUIZ MODE
//   b. but also this: https://people.eecs.berkeley.edu/~christos/papers/Bounds%20For%20Sorting%20By%20Prefix%20Reversal.pdf

function countSort(array){
  var builder = 0;
  count = [];
  var min = Math.min(array);
  var max = Math.max(array);
  for (var i = min; i <= max; i++){
    count[i] = 0;
  }

  for (var i = 0; i < array.length; i++){
    count[array[i]]++;
  }

  for (var i = min; i <= max; i++){
    while (count[i]-- > 0){
      array[builder++] = i;
    }
  }
  return array;
}
//


function shellSort1(array){
  // gaps
  var L = length = array.length;
  var g = 1;
  while(g < L/3){ // generate our G
    g = 3*g + 1;
  }
  // insert while gaps are a thing
  while(g >= 1){  // controls when to stop our g
    for (var i = g; i < L; i++){ // sets i to largest gap index, keeps i in list
      // moves j by - g as it backwards compares to i
      // checks backwards in 'gap-series generated array'
      for (var j = i; j >= g && array[j] < array[j-g]; j -= g) {  //
        // if swap is needed see ^, do this :D
        var t = array[j];
        array[j] = array[j-g];
        array[j-g] = t;
      }
    // at this point
    }
    // advance our gap series
    g = (g-1)/3;
  }
  return array;
}

var test = [1,5,2,4,3];
console.log(shellSort1(test))
console.log(countSort(test))
