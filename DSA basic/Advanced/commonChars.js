function commonChars(str1, str2) {
    let set = new Set()
    let result = new Set()
    for (let item of str1) {
        set.add(item)
    }
    for (let item of str2) {
        if (set.has(item)) {
            result.add(item)
            set.delete(item)
        }
    }
    return [...result]
}



// Test Case 1
console.log(commonChars("hello", "world"));
// Expected Output: ["l", "o"]

// Test Case 2
console.log(commonChars("abc", "def"));
// Expected Output: []

// Test Case 3
console.log(commonChars("javascript", "java"));
// Expected Output: ["j", "a", "v"]

// Test Case 4
console.log(commonChars("aabbcc", "ab"));
// Expected Output: ["a", "b"]