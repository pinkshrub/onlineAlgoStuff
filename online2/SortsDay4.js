// 0: Hi!!!!!! Happpppy Friday! 
// 1: Context
// 	a. We are doing sorts!
// 	b. yesterday was quick and merge
// 2: Yesterday!
// 	a. merge & quick
//  b. show'n'tell && expected behaviors
// 3: Today's Mission
// 	a. Radix
//  b. Pancake

// function rMergeSort(array){

// }
function arrayMerge(array1, array2){
	var result = [];
	while(0 < array1.length && 0 < array2.length ){
		var t = array1[0] < array2[0] ? array1.shift() : array2.shift();
		result.push(t);
	}
	// one list exhausted
	if (array1.length == 0){
		result.concat(array2);
	} else {
		result.concat(array1);
	}
	return result;
}
// function iMergeSort(array){

// }
function KwikSort(array){
	// breaks & declarations
	if(array.length <= 1){
		return array;
	}
	var left = [], right = [], pivot = array[0];
	for (var i = 0; i < list.length; i++){
		if(array[i] < pivot){
			left.push(array[i]);
		} else {
			right.push(array[i]);
		}
	}
	return KwikSort(left).concat(pivot, KwikSort(right));
}
// function RadixSort(array){

// }
// function PancakeSort(array){

// }

console.log(arrayMerge([1,3,5,7],[2,4,6]));