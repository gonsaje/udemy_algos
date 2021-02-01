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
        // console.log(same([1,2,3], [4,1,9])) // true
        // console.log(same([1,2,3], [1,9])) // false
        // console.log(same([1,2,1], [4,4,1])) // false (must be same frequency)


    // Anagram challenge:
        /* 
        Given 2 strings, write a function validAnagrams(str1, str2) to determine if the
        second string is an anagram of the first. An anagram is a word, phrase, or name
        formed by rearranging the letters of another, such as cinema, formed from iceman
        */

        // O(N) space | O(N) time
        // function validAnagrams(str1, str2) {
        //     if (str1.length !== str2.length) return false; // O(1) time

        //     let freq1 = {}; // O(N) space
        //     let freq2 = {}; // O(N) space

        //     for (let char of str1) { // O(N) time
        //         freq1[char] === undefined ? freq1[char] = 1 : freq1[char]++; // O(1) time
        //     }

        //     for (let char of str2) { // O(N) time
        //         freq2[char] === undefined ? freq2[char] = 1 : freq2[char]++; // O(1) time
        //     }

        //     for (let key in freq1) { // O(N) time
        //         if (freq2[key] === undefined) return false; // O(1) time
        //         if (freq1[key] !== freq2[key]) return false; // O(1) time
        //     }

        //     return true;
        // }

        // Output: 
        console.log(validAnagrams("", "")); // true
        console.log(validAnagrams("aaz", "zza")); // false
        console.log(validAnagrams("anagram", "nagaram")); // true
        console.log(validAnagrams("rat", "car")); // false
        console.log(validAnagrams("awesome", "awesom")); // false
        console.log(validAnagrams("qwerty", "qeywrt")); // true
        console.log(validAnagrams("texttwisttime", "timetwisttext")); // true

        // Other solution
        function validAnagrams(str1, str2) {
            if (str1.length !== str2.length) return false; // O(1) time

            let freq = {};

            for (let char of str1) { // O(N) time
                freq[char] === undefined ? freq[char] = 1 : freq[char]++; // O(1) time
            }

            for (let char of str2) { // O(N) time
                if (!freq[char]) {
                    return false;
                } else {
                    freq[char] -= 1;
                }
            }

          

            return true;
        }

        























