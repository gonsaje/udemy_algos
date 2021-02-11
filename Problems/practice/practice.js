// Frequency Counter
/************************************************************
Write a function sameFrequency(num1, num2). Given two positive
integers, find out if the two numbers have the same frequency of digits.

Constraint: Solution must be in O(N) time complexity.

sameFrequency(182, 281) => true
sameFrequency(34, 14) => false
sameFrequency(3589578, 5879385) => true
sameFrequency(22, 222) => false
*************************************************************/
// time O(N) | space O(N)
function sameFrequency(num1, num2) {
    if (String(num1).length !== String(num2).length) return false;

    let freq1 = digitFreq(num1); // O(N) time
    let freq2 = digitFreq(num2); // O(N) time

    for (let num in freq1) { // O(N) time
        if (freq1[num] !== freq2[num]) return false;
    }

    return true;
}

function digitFreq(num) { //function bigO: O(N) space & time
    let count = {}; // O(N) space
    for (let digit of String(num)) { // O(N) time;
        count[digit] === undefined ? count[digit] = 1 : count[digit]++;
    }
    return count;
}

// console.log(sameFrequency(182, 281));
// console.log(sameFrequency(34, 14));
// console.log(sameFrequency(3589578, 5879385));
// console.log(sameFrequency(22, 222));

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Frequency Counter/Multiple Pointers
/************************************************************
Write a function areThereDuplicates(...args) which accepts a
variable number of arguments, and checks wheter ther are any 
duplicates among the argumenbts passed in.
You can solve this using the frequency counter pattern OR
the multiple pointers pattern.

Constraint: Solution must be in O(N) time and space complexity.
Bonus: time O(n log n) | space O(1)

areThereDuplicates(1, 2, 3) => false;
areThereDuplicates(1, 2, 2) => true;
areThereDuplicates('a', 'b', 'c', 'a') => true;
*************************************************************/

// Frequency Counter Approach
function areThereDuplicates(...args) { // O(N) space | O(N) time
    let count = {}; // O(N) space

    for (let ele of args) { //O(N) time
        count[ele] ? count[ele]++ : count[ele] = 1; // O(1) time
    }

    for (let key in count) { // O(N) time
        if (count[key] > 1) return true; // O(1) time
    }

    return false;
}

// Multiple Pointers Approach

function areThereDuplicates(...args) {
    
    for (let i = 0; i < args.length; i++) {
        for (let j = i + 1; j < args.length; j++) {
            if (args[i] === args[j]) return true;
        }
    }

    return false;
}

console.log(areThereDuplicates(1, 2, 3) )//=> false;
console.log(areThereDuplicates(1, 2, 2))// => true;
console.log(areThereDuplicates('a', 'b', 'c', 'a'))// => true;