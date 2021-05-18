// Selection Sort

// Similar to bubble sort, but instead of first placing large values into sorted postion, 
// it places small values into sorted postion

/*
Pseudo Code:
- Store the first element as the smallest value you've seen so far
- Compare this item to the next item in the array until you find the smaller number
-If a smaller number is found, designate that smaller number to be the new min and continue until the end of the array
- If the min is not the index you initially began with swap the 2 values
- Repeat this with the next min element until array is sorted
*/

function selectionSort(arr) {
    let noSwap;
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        noSwap = true;
        
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
                noSwap = false;
            }
            
        }
        if (noSwap) break;
        if (min !== i) [arr[i], arr[min]] = [arr[min],arr[i]];
    }

    return arr;
}
console.log(selectionSort([2,5,4,1,2,3,2,3]))
console.log(selectionSort([20,-5,14,13,2,13,22,3]))
console.log(selectionSort([-2, -5, -4, -1, -2,-3, 2,3]))
console.log(selectionSort([20,50,44,111,223,34,62,73]))