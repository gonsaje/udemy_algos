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

// Break It Down

// - Explicitly write out the steps you need to take

function charCount {
    // do something
    // return an obj with keys that are lowercase alphanumeric chars in the string: values are frequencies
}
function charCount {
    // make obj to return at end
    // loop over string, for each char
        // if char is number/letter:
            // if char is key in obj += 1 to count
            // if not add key and set val to 1
        // else dont do anything 
    // return obj 
}
// Solve and Simplify
// Look Back and Refactor



