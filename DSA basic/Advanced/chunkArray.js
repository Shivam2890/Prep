// function chunkArray(arr, k) {
//     let n = arr.length;
//     let newArr = []
//     for (let i = 0; i < n; i += k) {
//         let result = []
//         for (let j = i; j < i + k; j++) {
//             if (j == n) break
//             result.push(arr[j])
//         }
//         newArr.push(result)
//     }
//     return newArr
// }
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8 ], 3));

function chunkArray(arr, size) {
    let result = []
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size))
    }
    return result
}
console.log(chunkArray([1, 2, 3, 4, 5], 2));
