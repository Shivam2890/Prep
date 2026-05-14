function findDuplicates(arr) {
    let set = new Set()
    let result = new Set()
    for (let item of arr) {
        if (set.has(item)) {
            result.add(item)
        } else {
            set.add(item)
        }
    }
    return [...result]
}



// Test Case 1
console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1]));
// Expected Output: [2,1]

// Test Case 2
console.log(findDuplicates([1, 2, 3, 4]));
// Expected Output: []

// Test Case 3
console.log(findDuplicates([5, 5, 5, 5]));
// Expected Output: [5]

// Test Case 4
console.log(findDuplicates([1, 1, 2, 2, 3, 3]));
// Expected Output: [1,2,3]