// Taco Truck && Balance point
happy break!
welcome to algorithms 1!
what is:
	algorithms are helpful
	explore concepts
	and problem solving!
	get a job...nuff said
	fun/switch pace
how is:
	lectures - 3ish days a week
		what does that look like?
		show&tell
		intro a Topic
		work on algos
		final thoughts
	whiteboard 1 time a week
	groups when possible
how you do well:
	resources
	show up! do them!
	slack channel
	try different approaches
context:
overall - prep you for real world/interviews
before - arrays 1
next   - strings & A. Arrays, Linked Lists, Stacks&Queues














function bPoint(arr){
	// edge cases...meow
	// sum array, call it 'right side'
	var sum_right = arr.reduce(function(total,value){return total + value;},(arr[0] * -1));
	// call nothing the 'left side'
	var sum_left = 0;
	// set fulcrum
	var f = 0;
	// begin le sneaky moving
	while(sum_right !== sum_left && f < arr.length){
		sum_left += arr[f];
		sum_right -= arr[f+1];
		f++;
	}
	// at this point, either f is arr.length orrr sum_right === sum_left...supposedly
	return sum_left === sum_right ?  f :  -1;
}

var test1 = [1,2,3,4,5,6,4];
console.log(bPoint(test1));

// Taco Truck
// attempt 1, le pythogorean mean :/
function tt1(coordinates){
	var x = 0, y = 0, L = coordinates.length;
	for (var coord in coordinates){
		x += coordinates[coord][0];
		y += coordinates[coord][1];
	}
	x = Math.round(x/L);
	y = Math.round(y/L);
	// returns a ROUNDED CENTER OF GRAVITY
	return [x,y];
}
// aggregate distance totaler
function distancer(truck_spot, people_spots){
	var d = 0;
	for(var i = 0; i < people_spots.length; i++){
		d += Math.abs(truck_spot[0]-people_spots[i][0]);
		d += Math.abs(truck_spot[1]-people_spots[i][1]);
	}
	return d;
}
var c1 = [[-1,-10],[1,10],[2,4]];
console.log(tt1(c1));
console.log(distancer(tt1(c1), c1));

function tt2(coordinates){
	var g = tt1(coordinates);
	// we now have g = rounded center of gravity.
	// lets see if we cn find a better value!
	var best_distance = distancer(g, coordinates);
	// have aggdistance for g
	if(distancer([g[0]-1,g[1]+1], coordinates) < best_distance){
		g = [g[0]-1,g[1]+1];
	}
	if(distancer([g[0],g[1]+1], coordinates) < best_distance){
		g = [g[0],g[1]+1];
	}
	if(distancer([g[0]+1,g[1]+1], coordinates) < best_distance){
		g = [g[0]+1,g[1]+1];
	}
	if(distancer([g[0]-1,g[1]], coordinates) < best_distance){
		g = [g[0]-1,g[1]];
	}
	if(distancer([g[0]+1,g[1]], coordinates) < best_distance){
		g = [g[0]+1,g[1]];
	}
	if(distancer([g[0]-1,g[1]-1], coordinates) < best_distance){
		g = [g[0]-1,g[1]-1];
	}
	if(distancer([g[0],g[1]-1], coordinates) < best_distance){
		g = [g[0],g[1]-1];
	}
	if(distancer([g[0]+1,g[1]-1], coordinates) < best_distance){
		g = [g[0]+1,g[1]-1];
	}
	return g;
}
