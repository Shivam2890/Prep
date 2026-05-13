function countWords(str) {
    // let arr = str.trim().split(/\s+/)
    let arr = str.split(" ").filter(item => item !== "").length
    return arr
    let sum = 0

    // i can use length property
    // for (let item of arr) {
    //     if (item !== "") {
    //         sum += 1
    //     }
    // }
    return sum
}



// Test Case 1
console.log(countWords("I love coding in JS"));
// Expected Output: 5

// Test Case 2
console.log(countWords("   Hello   World   "));
// Expected Output: 2

// Test Case 3
console.log(countWords("OneWord"));
// Expected Output: 1

// Test Case 4
console.log(countWords(""));
// Expected Output: 0