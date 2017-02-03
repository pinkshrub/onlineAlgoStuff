function suffixer(list){
	if (list.length < 2){
		return list[0];
	} else {
		return list.reduce(function(total, string){
			console.log('working on:', string, 'suffix: ', total);
			var i = -1;
			console.log('string:', string[string.length + i], 'total:', total[string.length + i]);
			while(string[string.length + i] == total[string.length + i] && total[string.length + i] != undefined){
				console.log('down');
				--i;
				console.log(i);
			}
			console.log(i);
			console.log(total.slice(i));
			return total.slice(i);
		},list[0]);
	}
}

var test = ['bob', 'baobob', 'kabob']
console.log(suffixer(test));