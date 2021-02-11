// DIVIDE AND CONQUER

// This pattern invlives dividng a data set into smaller chunks
// and then repeating a process with a subset of data

// THis pattern can tremendously decrease time complexity

// Given a sorted array of integers, write a function
// called search, that accepts a value and returns the index
// where the value is passed to the function is location.
// If the falue is not found return -1

// linear search (NON DIVIDE AND CONQUER)

function search(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
    return -1;
}

// binary search
// Time Olog(N) => we half our search by half each iteration
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let ele = nums[mid];

        if (ele < val) {
            min = mid + 1;
        } else if (ele > val) {
            max = mid - 1;
        } else {
            return mid;
        }
    }   

    return -1;
}

console.log(search([1,2,3,4,5,6], 4)) // 3
console.log(search([1,2,3,4,5,6], 6)) // 5
console.log(search([1,2,3,4,5,6], 11)) // -1