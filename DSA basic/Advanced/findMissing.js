function findMissing(arr, n) {
    // Write your code here
    let value = (n * (n + 1)) / 2
    let sum = 0;
    for (let num of arr) {
        sum += num
    }
    return value - sum
}



// Test Case 1
console.log(findMissing([1, 2, 4, 5], 5));
// Expected Output: 3

// Test Case 2
console.log(findMissing([2, 3, 1, 5], 5));
// Expected Output: 4

// Test Case 3
console.log(findMissing([1], 2));
// Expected Output: 2

// Test Case 4
console.log(findMissing([1, 2, 3, 4, 5, 6, 8], 8));
// Expected Output: 7