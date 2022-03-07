function selectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        console.log(arr);
        console.log(`checking to find the ${i+1}th smallest value`);
        var min = i;
        for(var j = i; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }

    return arr;
}

console.log(selectionSort([5,4,2,6,8,14,1,3]));