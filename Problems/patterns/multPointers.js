// MULTIPLE POINTERS

// Creating pointers or values that correspond to an index 
// or position and move towards the beginning, end or middle
// based on a certain condition 

// Very effecient for solving problems with minimal space complexity

// ex. linear strucutre
// array, string, double/single linked lists

// [-4, -3, -2, -1, 0, 1, 2, 5]
//  i =>                 <=  j

// ex.
// Write a function sumZero(arr) that accepts a sorted arrat of integers
// the function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined
// if pair does not exist
// similar to twoSum

// naive Solution:
// O(N^2) time | O(1) space
// function sumZero(nums) {
//     for  (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === 0) return [nums[i], nums[j]];
//         }
//     }
// }


// mult pointer solution
// O(N) time | O(1) space;
function sumZero(nums) {
    let i = 0;
    let j = nums.length - 1;

    while (i < j) {
        if (nums[i] + nums[j] === 0) return [nums[i], nums[j]];
        else if (nums[i] + nums[j] > 0) j--;
        else i++;
    }
}

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
// console.log(sumZero([-2, 0, 1, 3])); // undefined
// console.log(sumZero([1, 2, 3])); // undefined


/* 
Implement a function called countUniqueValues(arr)
which accepts a SORTED array and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted.
*/

// personal solution
// O(N) time | O(1) space
function countUniqueValues(arr) {
    // initialize a count
    let count = 0; // O(1) space
    let prev; //O(1) space
    // loop through the sorted
    for (let ele of arr) { // O(N) time
        // increment a count anytime the value changes
        if (ele !== prev) count++; // O(1) time
        prev = ele;
    }
    // return the count
    return count;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2, -1, -1, 0 , 1])) // 4



// Mult Pointer solution:
//   i
//  [1, 1, 2, 3, 3, 4, 5, 6, 6, 7]
//      j =>

// O(N) time | O(1) space
function countUniqueValues(arr) {
    if (arr.length === 0) return 0; //O(1) time
    let i = 0; // O(1) space
    for (let j = 1; j < arr.length; j++) { // O(N) time
        if (arr[i] !== arr[j]) { // O(1) time
            i++; // O(1) time
            arr[i] = arr[j]; //O(1) time
        }
    }
    return i + 1;    
}

// we move our j forward until we hit a new unique element
// we then move our i forward and replace the i element with the j element
// we continue this an essentially move all unique elements to the front of the array
// by the end of the function i will be resting on the last unique element
// which helps us find the total num of unique eles by adding one to the index
