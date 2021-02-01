// Define an algorithm
// Devise a plan to solve algorithms
// Compare and contrast problem solving patterns including frequency counters, two-pointer problems and divide and conquer

// What is an algorithm?
// A process or set of steps to accomplish a certain task

// ALmost everything you do in progamming involves some kinf of algo

// Its the foundation for being a successful problem solving developer

// Devise a plan for problem solving
// Master common problem solving patterns



// PROBLEM SOLVING STEPS:

// 1. UNDERSTAND THE PROBLEM

    // Can I restate the problem in my own words?
    // - What are the inputs that go into the problem?
    // - What are the outputs that should come from the solution to the problem?
    // - Can the outputs be determined from the inputs?
    // In other words, do I have enough info to solve the problem?
    // - How should I label the important pieces of data that are a part of the problem

    // ex. Write a function which takes 2 numbers and returns the sum
    // reword: write a function that adds 2 nums
    // inputs: 2 numbers , what are we inputting? floats, integers
    // output: number
    // enough info: yes,  but what if only one num is inputted
    // labels: 

    function add(num1, num2) {
        return num1 + num2;
}


// 2. EXPLORE CONCRETE EXAMPLES
    // - Helps understand better
    // - provides sanity checks that evenual solution works how it should
    // User stories
    // Unit tests
    // a. Start with simple examples
    // b. Progress to more complex examples
    // c. explore examples with empty inputs
    // d. explore examples with invalid inputs

    // ex. Write a func which takes in a string and returns counts of each char in the string
    // a.
    charCount('aaaa') // => {a:4}
    charCount('hello') // => {h: 1, e: 1, l: 2, o: 1}

    // b.
    'my phone number is 182763'
    // do we want to count spaces and numbers?
    'Hello hi'
    // do we want to care about casing of letters?

    // c.
    charCount("") // what do we want to return?

    // d.

    charCount(null) // what happens here?

    // 3. BREAK IT DOWN

    // - Explicitly write out the steps you need to take

    function charCount(str) {
        // do something
        // return an obj with keys that are lowercase alphanumeric chars in the string: values are frequencies
    }
    function charCount(str) {
        // make obj to return at end
        // loop over string, for each char
            // if char is number/letter:
                // if char is key in obj += 1 to count
                // if not add key and set val to 1
            // else dont do anything 
        // return obj 
    }

    // Shows that you're capable of formulating an apporach even if you dont finish


// 4. SOLVE/SIMPLIFY

    // Solve the problem if you can
    // If you can't solve a simpler problem

    // SIMPLIFY:
    // Find the core difficulty in what you're trying to do
    // Temporarily ignore the difficulty
    // Write a simplified solution
    // Incorporate the difficulty back in

    // ex.

    // return an object that returns alphanumeric characters of a string
    // chars should be counted as the same key ex. 'Y' or 'y' is 'y'

    function charCount(str) {
        // make obj to return at end
        let result = {};
        // loop over string, for each char
        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            // if char is number/letter:
            if (result[char] === undefined) {
                // if not add key and set val to 1
                result[char] = 1;
            } else {
                // if char is key in obj += 1 to count
                result[char]++
            }
            // else dont do anything 
        }
        // return obj 
        return result;
    }

    // we're 90% of the way there
    // all thats left is checking to see if something is alphanumeric
    


// 5. LOOK BACK AND REFACTOR


    // Can you check the result?
    // Can you derive the resuly differently?
    // Can you understand it at a glance?
    // Can you use the result or method for some otehr prolem?
    // Can you improve the performance of your solution?
    // Can you think of other ways to refactor?
    // How have other people solved this problem?

// ASK the company/interviewer after you've solved, what the other solutions are

function charCount(str) {
    var obj = {};
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) { // check whether the char is alphanumeric
            if (obj[char] > 0) {
                obj[char]++;
            } else {
                obj[char] = 1;
            }
        }
    }
    return obj;
}

// possible improvements
// use a for of loop rather than traditional for loop
// use ternary instead of if else

function charCount(str) {
    let obj = {};
    for (let char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) { // check whether the char is alphanumeric
            // obj[char] > 0 ? obj[char]++ : obj[char] = 1;
            // or
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}
// you might ask: i know how to check for regEXP (/[a-z0-9]/.test(char))
// but how effecient is that actually?
// I think there could be a better way to find this

// Boolean expressions are fast in any language
//  we could instead use charCode

function isAlphaNumeric(str) {
    let code;

    for (let i = 0; i < str.length; i++) {
        code = str.charCodeAt(i);
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
                return false;
        }
    }

    return true;
}

function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);


    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)

        return false;
    }

    return true;
}

function charCount(str) {
    let obj = {};
    for (let char of str) {
        char = char.toLowerCase();
        if (isAlphaNumeric(char)) { // use charCodes rather than regExp
            // obj[char] > 0 ? obj[char]++ : obj[char] = 1;
            // or
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}
// vs.

function isAlphaNumeric(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
}

