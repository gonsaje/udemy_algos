// How Objects & Arrays work (through big O)

// WHy adding elements to the beginning of an aray is costly

// compare and contrast runtimes for arrays and objects, as well as built-in methods



// Objects
// Unordered, key-value pairs

let instructor = {
    name: "Jae",
    isInstructor: true,
    favoriteFoods: ['ramen', 'pizza', 'sushi']
}

// work well when you dont need order
// When you need fast access/insertion and removal

// Big O of Objects:

// Insertion => O(1)
// Removal => O(1)
// Searching => O(N)
// Access => O(1)

// When order isn't need, objects are a great choice

// Object Methods:

// Object.keys() => O(N)
// Object.values() => O(N)
// Object.entries() => O(N)
// <Object>.hasOwnProperty(<key>) => O(1)


// Array
// ordered lists

let names = ['Jae', 'Joe', 'Jim'];

// When you need order
// When you need fast access/insertion and removal

// Insertion => It depends..
    // if we add to the end its O(1)
    // but if we add to the front it causes the array to re-index O(N)

// Removal => It depends..
    // same applies for removal

// Searching => O(N)
// Access => O(1)

// Big O of Array methods
// .push() O(1);
//  .pop() O(1);
// .shift() O(N);
// .unshift() O(N);
// .concat() O(N)
// .slice() O(N);
// .splice() O(N);
// .sort() O(N * log N)
//     
// .forEach/.map/.filter/.reduce/etc O(N)






