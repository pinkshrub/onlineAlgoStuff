// 0: Nice Weekend!!!!
// 1: Context! Arr II stuff && Reviewing things
// 	* Things to Review:
// 		- Matrix Search
// 		- Matrix Rotate
// 		- Remove Dupes -levels
// 		- Max Sub Array sums
// 		- Flatten	   -levels
// 		- Terrace Fill
// 	* This week will be sorts and stuff!
// 2: If Time, Big O Notation!
// 	what?
// 	why?
// 	how?
// 	sorts!

function matrixRotate(matrix, num_rotations){
	// take each column and make it a new row! woo! do that num_rotations times.
	if(!num_rotations){num_rotations = 1;}
	while(num_rotations > 0){
		console.log('doing a rotation!');
		var new_matrix = [];
		// some useful constants
		var oh = matrix.length; // new number of col.
		var ow = matrix[0].length; // new number of row
		// build new rows
		// while(oh > 0){
			console.log('here');
			// take each value of each row
			// outer loop is column
			// inner loop is row we on
			for(var i = 0; i < ow; i++){
				console.log('building a row!');
				var new_row = [];
				for(var row in matrix){
					new_row.push(matrix[row][i]);
				}
				new_matrix.push(new_row);
			}
			oh--;
		// }
		num_rotations--;
	}
	return new_matrix;
}
// var m1 = [[1,2],[3,4],[5,6]];
// console.log(matrixRotate(m1, 2));

function dedupe(list){
	// check for length and two identicals thigs
	var buffer = {};
	var anchor = 0, runner = 0;
	while(runner < list.length){
		if(!buffer[list[runner]]){
			// not in buffer
			buffer[list[runner]] = true;
			list[anchor] = list[runner];
			anchor++;
		}
		runner++;
	}
	list.length = anchor;
	console.log(list);
	return list;
}
// var t1 = [1,2,2,3,4,5,5,6,4,4];
// dedupe(t1);

function flatten(array){
	var neo = [];
	for (var i = 0; i < array.length; i++){
		// console.log(neo);
		if(Array.isArray(array[i])){
			// console.log('its an array');
			neo = neo.concat(array[i]);
		} else {
			// console.log('its not an array!');
			neo.push(array[i]);
		}
	}
	return neo;
}

function matrixSearch(find, field){
	var flatfield = flatten(field);// n
	var flatfind = flatten(find);// n
	// console.log('flat field: ',flatfield);
	// console.log('flat find: ', flatfind);
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
		// build temp array for comparing
		var h = 0;
		while( h < findH){
			// [(row x width) + column] + idx
			for(var j = 0; j< findW; j++){
				temp.push(flatfield[i + (h * findW) + j])
			}
			h++;			
		}
		console.log('out of building the thing');
		// console.log(flatfind, temp);
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

// console.log(flatten(testfield));
console.log(matrixSearch(testfind, testfield));

function rFlat(list){
	// assumes list or integer in list
	for (var i = 0; i < list.length; i++){
		if(Array.isArray(list[i]) && list[i].length > 0){
			list.splice(i,0,rFlat(list[i]));
		}
	}
	return list;
}
// console.log(rFlat([1,2,[3,4,5],6,[],7,[8,9,10]]));