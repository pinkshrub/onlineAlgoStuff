// 0: Hi! :D
// 1: Show'n'Tell
// 	a. Balance Index
// 	b. Taco Truck
// 2: Context
// 	a. Arrays 2!
// 	b. Handling pointers, multiple approaches, whiteboarding
// 3: Today!
// 	a. Bucketfill
// 		- WHITEBOARD
// 	b. Time To English
// 		- Pair program

function Ttruck(coordinates){
  var xs = [], ys = [], l = coordinates.length;
  for(var i = 0; i < l; i++){
    xs.push(coordinates[i][0]);
    ys.push(coordinates[i][1])
  }
  xs = xs.sort(function(a, b){return a-b});
  ys = ys.sort(function(a, b){return a-b});
  return [xs[Math.floor(l/2)], ys[Math.floor(l/2)]];
}

var tc = test_coordinates = [[10,0],[-1,-10],[2,4]];

console.log(Ttruck(tc));
