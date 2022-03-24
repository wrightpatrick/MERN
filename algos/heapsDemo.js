class MinHeap{
    constructor(){
        this.heap = [null];
    }

    add(val){
        this.heap.push(val);
        this.shiftUp();
    }

    shiftUp(){
        //index of new value
        let currentIndex = this.heap.length-1;
        //parentIndex
        let parentIndex = Math.floor(currentIndex/2);

        //while the parent value is bigger and currentIndex is not [1]
        while(this.heap[parentIndex]>this.heap[currentIndex] && currentIndex !==1){
            const temp = this.heap[parentIndex];
            //swap values
            this.heap[parentIndex] = this.heap[currentIndex];
            this.heap[currentIndex] = temp;

            //set currentIndex to parentIndex
            currentIndex = parentIndex;
            //find parent of currentIndex
            parentIndex = Math.floor(currentIndex/2);
        }
        
    }
    
    min(){
        return this.heap.length < 2 ? null : `The min value is: ${this.heap[1]}`;
    }
    // we always remove the top value
    remove(){
        // scenario 1: heap is empty
        if(this.heap.length < 2) return null;
        // scenario 2: only 1 value
        // if only 1 value, there is nothing to shift up after the value is removed
        const min = this.heap[1];
        if(this.heap.length === 2) {
            this.heap.pop();
            return min;
        }
        // scenario 3: there are values left after the min is removed
        this.heap[1] = this.heap.pop();
        // at the very end i will want to return the value i got
        // the firnal step is to shift the value down to its proper location
        this.shiftDown();
        // return value
        return min;
    }

    shiftDown(){
        // take the top value and shift it down until its in its proper place (both chilren are larger than itself)
        let indexToShiftDown = 1;
        //we need to keep track of the left value
        let leftIndex = indexToShiftDown * 2;
        //
        while(leftIndex < this.heap.length){
            // store right index in case we need it
            let rightIndex = leftIndex + 1;
            // we need to find which is the smallest
            let indexOfSmallest = leftIndex;
            // should i replace that value with the right index?
            if(rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[leftIndex]){
                indexOfSmallest = rightIndex;
            }
            // we need to check if the parent is larger than the child
            if(this.heap[indexToShiftDown] <= this.heap[indexOfSmallest]){
                // this means the parent index is in the right place and no swap needs to happen
                console.log("the value to shift down has found its home, breaking out of the function");
                break;
            }
            // the parent index is larger and needs to be swapped
            console.log("have not found its home yet, swapping with a smaller value")
            // time to swap values
            let temp = this.heap[indexToShiftDown];
            this.heap[indexToShiftDown] = this.heap[indexOfSmallest];
            this.heap[indexOfSmallest] = temp;
            // our value we are moving down the heap has shifted and we need to track it
            indexToShiftDown = indexOfSmallest;
            // we need to reset our left
            leftIndex = indexToShiftDown *2;
        }
    }
}

const myHeap = new MinHeap();

myHeap.add(89);
myHeap.add(2);
myHeap.add(676);
myHeap.add(23);
myHeap.add(76);
myHeap.add(32);
myHeap.add(576);
myHeap.add(23);
myHeap.add(75);
myHeap.add(56);
myHeap.add(32);
myHeap.add(7);
myHeap.add(4);
myHeap.add(7);
myHeap.add(3);
myHeap.add(1);
myHeap.add(7);
myHeap.remove();
myHeap.remove();
console.log(myHeap);
console.log(myHeap.min());
