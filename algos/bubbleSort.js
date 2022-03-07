function bubbleSort(arr){
	//while loop checking for no swaps
	let swapped = true;
	while(swapped){
		swapped = false;
		// loop through array, 0 to length -2
		for (i = 0; i <= arr.length-2; i++){
			//if arr[i] > arr[i+1]
			if(arr[i] > arr[i+1]){
				//temp swap
				let temp = arr[i+1];
				arr[i+1] = arr[i];
				arr[i] = temp;
				swapped = true;
			}
		}
	}
	return arr;
}

let arr = [5,4,2,6,9,14,1,3,20,-5,123];
console.log(arr);
console.log(bubbleSort(arr));