function longestUniqueSubstring(str) {
    let set = new Set()
    let max = 0
    let maxStr = ""
    let l = 0;
    for (let r = 0; r < str.length; r++) {
        while (set.has(str[r])) {
            set.delete(str[l])
            l++
        }
        set.add(str[r])
        let curr = str.slice(l, r + 1)
        if (curr.length > max) {
            max = curr.length
            maxStr = curr
        }
    }
    return maxStr
}

// Test Case 1
console.log(longestUniqueSubstring("abcabcbb"));
// Expected Output: "abc"

// Test Case 2
// console.log(longestUniqueSubstring("bbbbb"));
// Expected Output: "b"

// Test Case 3
// console.log(longestUniqueSubstring("pwwkew"));
// Expected Output: "wke"

// Test Case 4
// console.log(longestUniqueSubstring(""));
// Expected Output: ""