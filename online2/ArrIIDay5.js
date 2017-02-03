// 0: Hi! was life good?
// 1: Show'n'Tell
// 	a. Flatten Arrays (Recursion Pointers)
//  b. Matrix Search
// 	c. Dedupe (all the levels)
	// c: Stable? 	 -> things with identical keys/values appear the same going in and coming out
	// d: in-place? -> no auxillary data structure
// 2: Context
// 	a. holy smokes it feels like Friday, but it is only Wednesday!
// 	b. next week will be sorts and stuff, if you have random things you think might be appropriate for this time space, lmk :)
// 3: Today!
// 	a. Flatten Arrays! woooo!
// 		- boop!
// 	b. Rotate Matrix!
// 		- fun!

function flatten(array){
	var neo = [];
	for (var i = 0; i < array.length; i++){
		console.log(neo);
		if(Array.isArray(array[i])){
			console.log('its an array');
			neo = neo.concat(array[i]);
		} else {
			console.log('its not an array!');
			neo.push(array[i]);
		}
	}
	return neo;
}

function matrixSearch(find, field){
	var flatfield = flatten(field);// n
	var flatfind = flatten(find);// n
	console.log('flat field: ',flatfield);
	console.log('flat find: ', flatfind);
	var findH = find.length;
	var findW = find[0].length;
	var fieldH = field.length;
	var fieldW = field[0].length;
	console.log('fiH: ',findH,'fiW: ',findW,'feH: ',fieldH,'feW: ',fieldW);
	// iterate through flatfield, comparing indices to flat find
	function compare(array1, array2){
		var i = array1.length;
		flag = true;
		console.log('comparing!');
		while(i > -1){
			if(array1[i] !== array2[i]){
				flag = false;
			}
			i--;
		}
		return flag;
	}
	// moves through flatfield
	for(var i = 0; i < flatfield.length; i++){
		console.log('comparing through flatfield');
		// build arrays to compare
		var temp = [];
		// get each row
		for(var j = 1; j <= findH; j++){
			console.log('a row');
			// get each column
			for(var k = 0; k < findW; k++){
				console.log('a column');
				temp.push(flatfield[(k+i)*j]);
			}
		}
		console.log('out of building the thing');
		console.log(flatfind, temp);
		if(compare(temp,flatfind)){
			return true;
		}
	}
	return false;
}

var testfind = [[1,2],
				[3,4]]
var testfield = [[1,2,3,4],
				 [3,4,1,2],
				 [3,4,5,6],
				 [2,5,6,7]]

console.log(flatten(testfield));
console.log(matrixSearch(testfind, testfield));