// Sorting
/* 
the process of rearranging the items in a collection (i.e. an array)
so that the itesm are in some kind of order

Ex.
- Sorting numbers from smallest to largest
- Sorting names alphabetically
- Sorting movies based on release year
- Sorting movies based on revenue

*/

function sort(arr) {

    return arr;
}

// console.log(sort([23,45,6,12,13])) // [6,12,13,23,45]


// Array,sort() 
// - built in method accepts optional comparator function
// - You can use this comparator function to tell JS how you want it to be sorted
// - The comparator looks at pairs of elements (a and b),
//   determines their sort order based on the return value
//      - If it returns a negative number, a should come before b
//      - if it returns a psoitive number, b should come before a
//      - if it returns 0, doesn't matter

// functional example
function numberCompare (num1, num2) {
    return num1 - num2;
}

// console.log(["Steele", "Colt", "Data Structures", "Algorithms"].sort())
// console.log(["Steele", "Colt", "Data Structures", "Algorithms"].sort())
console.log(["Steele", "Colt", "Data Structures", "Algorithms"].sort((a,b) => a.length - b.length))

console.log([3,4,5,1,0,2,3,4].sort((a,b) => b-a))

