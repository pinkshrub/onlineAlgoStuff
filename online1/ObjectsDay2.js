// 0: Hi! :D
// 1: Show'n'Tell/Review
// 	a. zip()
// 	b. CoinChange()
// 2: Context
// 	a. We have learnt some strings!
//  b. Associative Arrays/Objects
// 	c. Using multiple data structures together **Hint Hint**
//  d. Linked Lists!
// 3: Today!
// 	a. parensValid()
//  b. bracesValid()

// function changer(change, currency){
//   var rc = result_change = {};
//   // order keys in legend
//
//   // loop through keys, mathing on changer
//
//
//   return rc;
// }


function zip(keys, values){  //takes in two arrays called keys and values
  var result = {};

  if (keys.constructor === Array && values.constructor === Array){ //Make sure they're arrays
    console.log('nont arrays homie!');
    return 'errored!';
  };

  for (var i = 0; i < keys.length; i++){ //iterate through the keys
    result[keys[i]] = values[i]; //set each key property equal to same index of the values array
  };
  return result;
};

// var arr1 = ["1","2","3"];
// var arr2 = ["uno","dos","tres",'quatro'];
// var x = zip(arr1, arr2);
// console.log(x);


function changer(amount){
  var fanny_pack = {quarters: 0, dimes: 0, nickels: 0, pennies: 0};
  var coin_values = {quarters: 25, dimes: 10, nickels: 5, pennies: 1};
  var remnant = 0; //needed to save the remaining amount after each add_coin

  function add_coin(coin, amount){
    while (amount >= coin_values[coin]){
      amount -= coin_values[coin];
      fanny_pack[coin] += 1;
      console.log('added :' + coin)
    };
    remnant = amount;
  }

add_coin('quarters', amount);
add_coin('dimes', remnant);
add_coin('nickels', remnant);
add_coin('pennies', remnant);

  console.log('hi');
  return fanny_pack; //In real life we would likely store fanny_pack to a result object that we would return?
};
//One limitation is that the fanny_pack would need to be cleared if we want to use this function more than once

console.log(changer(787));
console.log(changer(5));


/* I created the subordinate add_coin function after reviewing my first non-DRY answer...
 function coin_counter (amount){
        while (amount >= 25){
            amount -= 25;
            fanny_pack.quarters += 1;
        };
        while (amount >= 10){
            amount -= 10;
            fanny_pack.dimes += 1;
        };
        while (amount >= 5){
            amount -= 5;
            fanny_pack.nickels += 1;
        };
        while (amount >= 1){
            amount -=1;
            fanny_pack.pennies += 1;
        };
    };      */
