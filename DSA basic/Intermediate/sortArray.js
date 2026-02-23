//selection sort
// function sortArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 [arr[i], arr[j]] = [arr[j], arr[i]]
//             }
//         }
//     }
//     return arr
// }


// console.log(sortArray([5, 3, 8, 1])); //[ 1, 3, 5, 8 ]

// // basic code of bubble sort not optimize
// function sortArray(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         let swapped = false
//         for (let j = 0; j < arr.length - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//                 swapped = true
//             }
//         }
//         if (!swapped) break;
//     }
//     return arr
// }

// console.log(sortArray([5, 3, 8, 1]));

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))

    return merge(left, right)
}

function merge(left, right) {
    let result = []
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i])
            i++;
        } else {
            result.push(right[j])
            j++;
        }
    }
    return result
        .concat(left.slice(i))
        .concat(right.slice(j))
}

console.log(mergeSort([5, 3, 8, 1]));
