// 0: Hi! :D
// 1: Show'n'Tell
// 	a. Time To English
// 	b. TerraceFill
// 2: Context
// 	a. Arrays 2!
//  b. Recursion...o bb...
// 	c. Handling pointers, multiple approaches, whiteboarding
// 3: Today!
// // 	a. Deduplicate
// 			1: Stable
// 			2: in-place
// 			3: in-place AND Stable
// 			4: eliminate any second (inner) loop.
// 		- WHITEBOARD
// 	b. R Binary Search ~*~!?recursion?!~*~
	// 		- Given a sorted array and a value, recursively determine whether value is found within the array. rBinarySearch([1,3,5,6], 4) = false; 						  rBinarySearch([4,5,6,8,12],5) = true

// TerraceFill
function terraceFill(array){
	if (array.length > 3){
		return 'your terrace doesnt fill'
	}
	// checkes
	var total = 0,
		left  = 0;

	// this finds buckets! given a starting index, returns an index where the water level is even again.
	// this bucket finder goes left to right
	function LRbucketfinder(idx, stop){
		var rightbound = idx + 1;
		while(array[rightbound] <= array[idx]){
			rightbound++;
		if(rightbound > stop){
			return false;
		}
		return rightbound;
	}
	// this one is left to right
	function RLbucketfinder(idx, stop){
		var leftbound = idx - 1;
		while(array[leftbound] <= array[idx]){
			leftbound--;
		}
		if(leftbound < stop){
			return false;
		}
		return leftbound;
	}
	// totals up water in bucket, we need to check indices math here
	function bucketCounter(left, right){
		var area = array[left] * (right - left);
		var bucket = 0;
		for (left; left < right; left++){
			bucket+=array[left];
		}
		return area - bucket;
	}

	// lets do the stuff!
	var right = LRbucketfinder(left, array.length);
	while(we still finding buckets ->){
		if(right){
			total += bucketCounter(left, right);
		}
	}

}

// Time To English
function timeToEnglish(int){
	// declares and checks
	var result = '';
	// figure out hours

	// figure out minutes

	// prep result

	return result;
}

// Stable
function dedupe1(str){

}

// in-place
function dedupe2(str){

}

// in-place and Stable
function dedupe3(str){

}

// elimate second/inner loops
function dedupe4(str){

}
