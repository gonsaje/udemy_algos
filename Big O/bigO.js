// Big O
// There can be various apporaches to a solution
// We use Big O to find the best/efficient method

// ex. reverse a string

// Big O: time O(n)  |  space O(n)
function reverse(str) {
    let chars = str.split("");
    let revStr = ""; // O(n) space

    for (let i = chars.length - 1; i >= 0; i--) { // O(n) time
        revStr += chars[i];
    }

    return revStr;
}

// Big O: time | space
function reverse(str) {
    return str.split("").reverse().join("");
}



////////////////////////////////////

function addUpTo(n) { // time was longer than the second solution
    let total = 0;

    for (let i = 1; i <= n; i++) { // O(n)
        total += i; // O(1) 
    }

    return total;
}

function addUpTo(n) { // significantly faster
    return n * (n + 1) / 2; // O(1); 
}

// console.log(addUpTo(6)) // => 21
// console.log(addUpTo(3)) // => 6

// Check performance in window context

// let t1 = performance.now();
// addUpTo(10000000000);
// let t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`)

// Problems with time:

// Different machines record different times
    // Computer specs can affect performance

// Same machine can record different times

// Fast algos, speed measurements may not be precise enough

// Instead of counting time, count the number of simple operations the computer has to perform


// O(n)
function addUpTo(n) { // time is proportional to n 
    let total = 0; // 1 assignment

    // 1 assignment, n comparisons, n additions & assignments (for loop)
    for (let i = 1; i <= n; i++) { // O(n)
        total += i; // O(1) we run this as many times as n operations 
        // n additions & n reassignments
    }

    return total;
}
// 5n + 2 => n 

// O(1)
function addUpTo(n) { // constant time 
    return n * (n + 1) / 2; // O(1); we only run 3 simple operations no matter what n is
}
// 3 => 1


// ²³⁴⁵⁶⁷⁸⁹ 
// Big O rules:

// Same level: add | Inside: multiply

// Constants don't matter:

//     O(2n) => O(n);
//     O(500) => O(1);
//     O(13n²) => O(n²);
//     O(n + 10) => O(n);
//     O(1000n + 50) => O(n);
//     O(n² + 5n + 8) => O(n²)

// Time Complexity is defined by the largest time complexity

// Constant Time O(1):
//     Arithmetic operations
//     Variable assignment
//     Accessing elements in an array using index
//     Accessing values in an object by key

// Linear Time O(n):
//     Loops (When number of operations grows with n)



function countUpAndDown(n) { // O(n) + O(n) => O(2n) => O(n)
    console.log('counting up!');

    for (let i = 0; i < n; i++) { // O(n)
        console.log(i);
    }

    console.log("At the top | counting down!");

    for (let j = n - 1; j >= 0; j--) { // O(n)
        console.log(j);
    }

    console.log("done");
}



function printPairs(n) { // O(n) * O(n) => O(n²)
    for (let i = 0; i < n; i++) { // O(n)
        for (let j = i + 1; j < n; j++) { // O(n)
            console.log(i, j);
        }
    }
}


function logAtLeast5(n) { // O(n)
    for (let i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}

function logAtMost5(n) { // O(1);
    for (let i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}


// Quiz 1

// O(n + 10) => O(n)
// O(100 * n) => O(n)
// O(25) => O(1)
// O(n² + n³) => O(n³)
// O(n + n + n + n) => O(n)

// Space Complexity

// Most primitives are constant space
    // booleans, numbers, undefined, null

// Strings require O(n) space (n is based on string's length)
// Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

function sum(arr) { // O(1) space
    let total = 0; // 1 total value no matter what
    for (let i = 0; i < arr.length; i++) { // 1 value of i at a time
        total += arr[i];
    }

    return total;
}


function double(arr) { // O(n) space
    let newArr = []; // this array gets longer based on the input
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }

    return newArr;
}

// Logarithms ₀₁₂₃₄₅₆₇₈₉

// logarithm is an opposite of expnents

// log₂(8) => 3   |   2³ => 8

// Omit the subscript
// We care more about the trend

// log₂ => log

// log(8) => 3
// an algo with log(n) time is great!
// an algo with O(nlog(n)) is better than n²



