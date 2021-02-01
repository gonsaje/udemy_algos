// Some popular patterns:


// FREQUENCY COUNTER
    // This pattern uses objects or sets to collect values/frequencies of values

    // This can often avoid the need for nested loops or 
    // O(N^2)operations with arrays and strings

    // usually O(N) time
    //  ex.

        /*
        Write a function same(arr1, arr2) which accepts two arrays. 
        The function should return true if every value in the array has it's 
        corredsponding value squared in the second array.
        The frequency of values must be the same.
        */


        // the "Naive" approach:
        // O(1) space | O(N^2) time
        function same(arr1, arr2) {
            if (arr1.length !== arr2.length) return false; // O(1)

            for (let i = 0; i < arr1.length; i++) { // O(N)
                let correctIdx = arr2.indexOf(arr1[i] ** 2); // O(N)
                if (correctIdx === -1) return false; // O(1)
                arr2.splice(correctIdx, 1); // O(N)
            }
            return true;
        }

        // Frequency Counter Solution
        // O(N) time | O(N) space
        function same(arr1, arr2) {
            if (arr1.length !== arr2.length) return false; // O(1)

            let count1 = {};
            let count2 = {};

            for (let val of arr1) {
                count1[val] === undefined ? count1[val] = 1 : count1[val]++;
            }

            for (let val of arr2) {
                count2[val] === undefined ? count2[val] = 1 : count2[val]++;
            }

            for (let key in count1) {
                let square = key ** 2;
                if (count2[square] === undefined) return false;
                if (count2[square] !== count1[key]) return false;
            }
            
            return true;
        }

        // Output:
        console.log(same([1,2,3], [4,1,9])) // true
        console.log(same([1,2,3], [1,9])) // false
        console.log(same([1,2,1], [4,4,1])) // false (must be same frequency)



// MULTIPLE POINTERS




// SLIDING WINDOW




// DIVIDE AND CONQUER





// DYNAMIC PROGRAMMING





// GREEDY ALGORITHMS





// BACKTRACKING