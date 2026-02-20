// function difference(arr1, arr2) {
//     const set = new Set(arr1)
//     const set2 = new Set(arr2)
//     let result = []
//     for(let item of arr2){
//         if(!set.has(item)){
//             result.push(item)
//         }
//     }

//     for(let item2 of arr1){
//         if(!set2.has(item2)){
//             result.push(item2)
//         }
//     }
//     return result
// }

// console.log(difference([1,2,3], [2,3,4])); //[1, 4]

function difference(arr1,arr2){
    let set1 = new Set(arr1)
    let set2 = new Set(arr2)

    return [
        ...[...set1].filter(x => !set2.has(x)) ,
        ...[...set2].filter(x => !set1.has(x))
    ]
}
console.log(difference([1,2,3], [2,3,4])); //[1, 4]

// function difference(arr1,arr2){
//     let result = []
//     for(let item of arr1)

//         ret
// }
// console.log(difference([1,2,3], [2,3,4]))
