// // function findPairs(arr, k) {
// //     let result = []
// //     for (let i = 0; i < arr.length - 1; i++) {
// //         for (let j = i + 1; j < arr.length; j++) {
// //             if ((arr[i] + arr[j]) == k) {
// //                 result.push([arr[i], arr[j]])
// //             }
// //         }
// //     }
// //     return result
// // }
// // console.log(findPairs([1, 2, 3, 4, 5], 6)); 

// function findPairs(arr, k) {
//     let set = new Set()
//     let result = []

//     // x+y=k (for each number x we need)
//     //Check if k - currentNumber already exists
//     // If yes → we found a pair
//     // Store current number in set


//     for (let num of arr) {
//         const target = k - num;
//         if (set.has(target)) {
//             result.push([target, num])
//         }
//         set.add(num)
//     }
//     return result
// }
// console.log(findPairs([1, 2, 3, 4, 5], 6))

function findPairs(arr,k){
    let left = 0;
    let right = arr.length-1;
    let result = []
    while(left<right){
        const sum = arr[left] +arr[right]

        if(sum === k){
            result.push([arr[left],arr[right]])
            left++;
            right--;
        }
        else if(sum<k){
            left++
        }
        else{
            right--
        }
    }
    return result
}
console.log(findPairs([1, 2, 3, 4, 5], 6))