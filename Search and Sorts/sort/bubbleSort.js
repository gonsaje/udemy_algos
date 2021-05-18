/* 
Bubble Sort

A sorting algo where the largest values bubble up to the top

PseudoCode:
- Start looping from the end of the array towards the beginning (i)
- Start an inner loop with a variable called j from the beginning until i - 1;
- if arr[j] is greater than arr[j + 1], swap the two values]
- return sorted arr


*/
// ES5
function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// or 
// ES2015
const swap1 = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function bubbleSort(arr) {
    
    for (let i = arr.length - 1; i >= 0; i--) {

        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
    }


    return arr;
}

// in the current implementation, even if the input arr is sorted/almost sorted the loops will run all iterations

// Optimized
function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length - 1; i >= 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                noSwaps = false;
            } 
        }

        if (noSwaps) break;
    }

    return arr;
}

// BestCase: O(n) => for already sorted and almost sorted
console.log(bubbleSort([2,5,4,1,2,3,2,3]))
console.log(bubbleSort([20,-5,14,13,2,13,22,3]))
console.log(bubbleSort([-2, -5, -4, -1, -2,-3, 2,3]))
console.log(bubbleSort([20,50,44,111,223,34,62,73]))
