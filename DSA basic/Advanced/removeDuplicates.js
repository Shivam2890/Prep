function removeDuplicates(nums) {
    let set = new Set()
    let p = 0;
    for (let item of nums) {
        if (!set.has(item)) {
            set.add(item)
            nums[p] = item
            p++
        }
    }
    nums.splice(p)
    return nums

}



// Test Case 1
let arr1 = [1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(arr1))
// Expected Output: 4 , [1,2,3,4]

// Test Case 2
// let arr2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// console.log(removeDuplicates(arr2))
// Expected Output: 5 , [0,1,2,3,4]

// Test Case 3
// let arr3 = [1, 1, 1]
// console.log(removeDuplicates(arr3))
// Expected Output: 1 , [1]