# JavaScript Algorithms and Data Structures Masterclass
(Based on the JavaScript DS & A course)

## Big O
### Rules of Thumb:

Same level: add | Inside: multiply


### Time Complexity

Constants don't matter:

* O(2n) => O(n);
* O(500) => O(1);
* O(13n²) => O(n²);
* O(n + 10) => O(n);
* O(1000n + 50) => O(n);
* O(n² + 5n + 8) => O(n²)

Time Complexity is defined by the largest time complexity

Constant Time O(1):
* Arithmetic operations
* Variable assignment
* Accessing elements in an array using index
* Accessing values in an object by key

Linear Time O(n):
* Loops (When number of operations grow based on n)




### Space Complexity

Most primitives are constant space
* booleans, numbers, undefined, null

Strings require O(n) space (n is based on string's length)

Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

