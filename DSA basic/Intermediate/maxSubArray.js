// function maxSubArray(nums) {
//     let max = -Infinity // or nums[0]

//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i; j < nums.length; j++) {
//             let sum = 0;
//             for(let k =i; k<=j; k++){
//                 sum +=nums[k]
//                 max = Math.max(sum,max)
//             }
//         }
//     }
//     return max
// }

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6

// function maxSubArray(nums) {
//     let max = -Infinity // or nums[0]

//     for (let i = 0; i < nums.length; i++) {
//         let sum = 0;
//         for (let j = i; j < nums.length; j++) {
//             sum += nums[j]
//             max = Math.max(sum, max)
//         }
//     }
//     return max
// }

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maxSubArray([-2, -3, 4, -1, -2, 1, 5, -3]))


//kedeice algo
function maxSubArray(nums) {
    let max = -Infinity;
    let sum = 0
    for (let i = 0; i < nums.length; i++) { // i simply move & keep adding & if it goes below 0 (sum<0)
        // i will drop
        sum += nums[i]
        if (sum > max) {
            max = sum
        }

        if (sum < 0) {
            sum = 0
        }
    }
    return max

}
console.log(maxSubArray([-2, -3, 4, -1, -2, 1, 5, -3]))

// function maxSubArray(nums) {
//     let max = -Infinity;
//     let sum = 0
//     let start = 0;

//     for (let i = 0; i < nums.length; i++) { // i simply move & keep adding & if it goes below 0 (sum<0)
//         // i will drop
//         if (sum == 0){
//             start = i
//         }
//             sum += nums[i]
//         if (sum > max) {
//             max = sum

//             // ansStart = start, ansEnd = i
//         }

//         if (sum < 0) {
//             sum = 0
//         }
//     }
//     return max

// }
// console.log(maxSubArray([-2, -3, 4, -1, -2, 1, 5, -3]))