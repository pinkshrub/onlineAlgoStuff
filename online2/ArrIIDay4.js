// 0: Hi! was life good?
// 1: Show'n'Tell
// 	a. Binary Search (Recursion, Pointers)
// 2: Context
// 	a. Subtler Array manipulations
// 	b. Recursion, because it allows more readable complicated Ideas
//  c. Sorts? Strings II? Linked ListsII?
// 3: Today!
// 	a. Flatten Arrays! woooo!
// 		- boop!
// 	b. Matrix Search!
// 		- fun!

function ibSearch(array, val){
	console.log('you think you kno');
	// partion array looking for points until l >= r
	var l = 0, r = array.length, m = Math.floor((l + r)/2);
	while( l <= r ){
		// whilst we have an array to work with
		var left = array[l], right = array[r], mid = array[m];
		if (left == val || right == val || mid == val){
			return true;
		} else {
			if(val > mid){
				// look right!
				l = m + 1;
				r = r - 1;
				m = Math.floor((l + r)/2);
			} else {
				// look left!
				l = l + 1;
				r = m - 1;
				m = Math.floor((l + r)/2);
			}
		}
	}
	return (array[l] == val || array[r] == val);
}

function rbSearch(array, val){
	console.log('recursion!');
	var l = 0, r = array.length - 1;
	var m = (r + l)/2;
	if(l >= r){
		return false;
	}
	var right = array[r], left=array[l], mid = array[m];
	if( right == val || mid == val || left == val ){
		return true;
	} else {
		if (mid > val){
			// look left
			return rbSearch(array.slice(l+1,m),val);
		} else {
			return rbSearch(array.slice(m+1, r), val);
		}
	}
}

function dedupe1(array){
	console.log('stable!');
	// # easy
	var result = [];
	for (var i; i < array.length; i++){
		if(result.indexOf(array[i]) == -1){
			result.push(array[i]);
		}
	}
	return result;
}

function dedupe2(array){
	console.log('in places');

}

function dedupe3(array){
	console.log('stable and in place!');
}

function dedupe4(array){
	console.log('stable and in place and 1 loop!');

}


var test1 = [1,2,3,4,5,6,7,8];
console.log(ibSearch(test1, 7));
console.log(rbSearch(test1, 7));
var test2 = [1,1,2,1,2,3,1,2,3,4];
