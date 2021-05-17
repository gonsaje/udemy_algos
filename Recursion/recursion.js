//  Recursion

// Objectives:
// What recursion is and how its useful
// 2 essential components of recursive function
// visualize call stack
// use helper method recursion and pure recursion to solve more difficult problems


// Recursion is a process that calls itself
// 

// The Call Stack
// Any time a func is invoked it is placed/pushed on the top of the call stack
// When JS sees the return keyword or when the function ends, the compiler will remove (pop)


// Recursion Pitfalls:
// No base case or wrong base case
// Stack Overflow

// Helper Method Recursion

// ex.

// function outer(input) {

//     var outerScopedVariable = [];

//     function helper(helperInput) {
//         // modify the outerScopedVariable

//         helper(helperInput--);
//     }
//     helper(input);
//     return outerScopedVariable;
// }

function collectOddValues(arr) {

    let result = [];

    
    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }
    
        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }
    
        helper(helperInput.slice[1]);
    }

    helper(arr);

    return result;
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));