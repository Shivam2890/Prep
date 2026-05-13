function sumEven(arr) {
    let sum = 0;
    for (let item of arr) {
        if ((item & 1) === 0) {
            sum += item
        }
    }
    return sum
}



// Test Case 1
console.log(sumEven([1, 2, 3, 4, 5, 6]));
// Expected Output: 12

// Test Case 2
console.log(sumEven([10, 11, 12]));
// Expected Output: 22

// Test Case 3
console.log(sumEven([1, 3, 5]));
// Expected Output: 0

// Test Case 4
console.log(sumEven([-2, 4, -6]));
// Expected Output: -4