// Check every element in order 

// ex
let names = ["bob", "jim", "karen"];

// indexOf
// includes

// Linear Seach Pseudocode
// let target = "karen";

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }

    return -1;
}

// Best Case Scenario: O(1) => if the target is the first in the arr.
// Worst case scenario: O(n) => if target is last in the arr


