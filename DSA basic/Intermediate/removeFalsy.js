// function removeFalsy(arr) {
//     let result = []
//     for(let item of arr){
//         if(Number.isFinite(item)){
//             result.push(item)
//         }
//     }
//     return result
// }

// console.log(removeFalsy([0, 1, false, 2, "", 3, null]));

// function removeFalsy(arr) {
//     const result = arr.filter(u => Number.isFinite(u))
//     return result
// }

// console.log(removeFalsy([0, 1, false, 2, "", 3, null]));
function removeFalsy(arr) {
    const result = arr.filter(u => Boolean(u))
    return result
}

console.log(removeFalsy([0, 1, false, 2, "", 3, null]));

// function removeFalsy(arr) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]) {
//             result.push(i)
//         }
//     }
//     return result
// }

// console.log(removeFalsy([0, 1, false, 2, "", 3, null]));


// function removeFalsy(arr) {
//     let result = []
//     for (let i of arr) {
//         if (i) {
//             result.push(i)
//         }
//     }
//     return result
// }

// console.log(removeFalsy([0, 1, false, 2, "", 3, null]));

