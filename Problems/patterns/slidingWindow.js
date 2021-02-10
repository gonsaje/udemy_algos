
// SLIDING WINDOW

// This pattern invloves creating a window which can either be an 
// array or number from one position to another
// Depending on a certain condition, the window either increases
// or closes (and a new window is created)
// Useful for keeping track of a subeset of data in a string/array/etc.


//  [1, 2, 3, 4, 5, 6, 7]
//   i  j

// my attempt:

// Write a function called maxSubarrySum which 
// accepts an array of integers and a number called n.
// The functino should calculate the maxmium sum of 
// n consecutive elements in the array.

// function maxSubarrySum(numbers, n) {

//     if (n > numbers.length) {
//         return null;
//     }

//     let maxSum = -Infinity;
//     for (let i = 0; i <= numbers.length - n; i++) { // O(N)
//         let sum = 0;
//         for (let j = 0; j < n; j++) { // O(N)
//             sum += numbers[i + j];
//         }

//         if (sum > maxSum) {
//             maxSum = sum;
//         }
//     }

//     return maxSum;
// }

////////////////////////////////////////////
// SLIDING WINDOW APPROACH
// TIME O(N | SPACE O(1)
function maxSubarrySum(numbers, n) {
    let maxSum = 0;
    let sum = 0;
    if (numbers.length < n) return null;
    for (let i = 0; i < n; i++) { // add n numbers together
        maxSum += numbers[i];
    }
    
    sum = maxSum;
    
    for (let i = n; i < numbers.length; i++) { // to find the next group sums
        sum = sum - numbers[i - n] + numbers[i]; //subtract the earliest number and add the next number
        maxSum = Math.max(maxSum, sum);
    }
    
    return maxSum;
}

console.log(maxSubarrySum([1,2,5,2,8,1,5],2)) //=>  10
console.log(maxSubarrySum([1,2,5,2,8,1,5],4)) //=>  17
console.log(maxSubarrySum([4,2,1,6],1)) //=>  6
console.log(maxSubarrySum([4,2,1,6,2],4)) //=>  13
console.log(maxSubarrySum([],4)) //=>  null