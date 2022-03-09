function combine(left, right) {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }

    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right array)
    return [...arr, ...left, ...right]
}
function mergeSort(array) {
    const half = Math.floor(array.length / 2)
    // Base case or terminating case
    if (array.length < 2) {
        return array
    }
    //using splice dont have to specify the right the rest of the array will be right
    const left = array.splice(0, half)
    return combine(mergeSort(left), mergeSort(array))
}