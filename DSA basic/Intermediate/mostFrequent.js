// function mostFrequent(arr) {
//     let map = new Map()
//     let maxCount = 0;
//     let mostFrequentValue = null;

//     for (let item of arr) {
//         let count = (map.get(item) ?? 0) + 1
//         map.set(item, count)

//         if (count > maxCount) {
//             maxCount = count;
//             mostFrequentValue = item
//         }
//     }

//     return mostFrequentValue
// }

// console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4]));


// function mostFrequent(arr) {
//     let obj = {}
//     let maxCount = 0;
//     let result = null;
//     for (let item of arr) {
//         obj[item] = (obj[item] ?? 0) + 1

//         if(obj[item] > maxCount){
//             maxCount = obj[item]
//             result = item
//         }
//     }
//     return result;
// }

// console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4]));


function mostFrequent(arr) {
    let maxCount = 0;
    let result = null
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) count++
        }

        if (count > maxCount) {
            maxCount = count
            result = arr[i]
        }
    }


    return result
}

console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4]));

const obj = {};
obj[{}] = 1;
obj[{}] = 2;

console.log(obj);

