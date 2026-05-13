function hasUniqueChars(str) {
    let set = new Set()
    let l = 0;
    for (let r = 0; r < str.length; r++) {
        if (set.has(str[r])) {
            return false
        }
        set.add(str[r])
    }
    return true
}



// Test Case 1
console.log(hasUniqueChars("abcdef"));
// Expected Output: true

// Test Case 2
console.log(hasUniqueChars("hello"));
// Expected Output: false

// Test Case 3
console.log(hasUniqueChars("12345"));
// Expected Output: true

// Test Case 4
console.log(hasUniqueChars("aabbcc"));
// Expected Output: false