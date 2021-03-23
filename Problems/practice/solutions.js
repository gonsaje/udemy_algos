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
    args.sort((a,b) => a-b); //O(nlogn)
    let start = 0;
    let next = 1;
    while (next < args.length) {
        if (args[start] === args[next]) return true;
        start++;
        next++;
    }

    return false;
}


// One Liner Solution
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// averagePair Solution
function averagePair(arr, num){
  let start = 0
  let end = arr.length-1;
  while(start < end){
    let avg = (arr[start]+arr[end]) / 2 
    if(avg === num) return true;
    else if(avg < num) start++
    else end--
  }
  return false;
}

// isSubsequence Solution - Iterative
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

// isSubsequence Solution - Recursive but not O(1) Space
function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}