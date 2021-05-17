// Naive String Search

// Long String: wowomgzomg
// Short String: omg

// simplest approach: match character by charcter
// does each the o match? yes => check the next letter, no => move onto next letter



function strSearch(longStr, pattern) {
    let count = 0;
    // console.log("outside")
    for (let i = 0; i < longStr.length; i++) {
        let char = longStr[i];
        // console.log("outerloop top")
        if (char === pattern[0]) {
            // console.log("conditional")
            let j = i + 1;
            let l = 1;

            while (l < pattern.length) {
                // console.log("innerloop")
                if (longStr[j] !== pattern[l]) break;
                j++;
                l++;
            }
            
            if (l === pattern.length) count++;
        }
        // console.log("hello");
    }

    return count;
}

console.log(strSearch("wowomgzomg", "omg"))
console.log(strSearch("hello, my name is ellen degeneres and when I ring this bell, everything will go well", "ell"))
console.log(strSearch("take me to your leader on the planet of earth or mars", "o"))
// console.log(strSearch("wowomgzomg", "omg"))
// console.log(strSearch("wowomgzomg", "omg"))
