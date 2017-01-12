function bubbleSort(array) {
	if (array.length < 2) {
		return array;
	}
	for(var i = 0; i < array.length-1; i++){
		var elem1 = array[i];
	}
	for (var j = 1; j < array.length; j++) {
			var elem2 = array[j]
			if (elem1 > elem2) {
				array = swap(i, j, array);
			}
	}
	if (array == array.sort()) {
		return array
	}
}

function swap(index, index2, array){
	var temp = array[index];
	array[index] = array[index2];
	array[index2] = temp;

	return array;
}
