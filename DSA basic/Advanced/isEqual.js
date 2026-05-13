function isEqual(obj1, obj2) {
    let key1 = Object.keys(obj1)
    let key2 = Object.keys(obj2)
    if (key1.length !== key2.length) return false

    for (let key of key1) {
        if (obj1[key] !== obj2[key]) return false
    }
    return true
}

// Test Case 1
console.log(isEqual(
    { a: 1, b: 2 },
    { a: 1, b: 2 }
));
// Expected Output: true

// // Test Case 2
console.log(isEqual(
    { a: 1, b: 2 },
    { a: 1, b: 3 }
));
// // Expected Output: false

// // Test Case 3
console.log(isEqual(
    { a: 1, b: 2 },
    { a: 1 }
));
// // Expected Output: false

// // Test Case 4
console.log(isEqual(
    {},
    {}
));
// Expected Output: true