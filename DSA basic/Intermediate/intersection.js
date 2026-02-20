// function intersection(arr1, arr2) {
//     let result = new Set()
//     for(let i = 0; i<arr1.length; i++){
//         for(let j=0; j<arr2.length; j++){
//             if(arr1[i] === arr2[j]){
//                 result.add(arr1[i])
//             }
//         }
//     }
//     return [...result];
// }

// console.log(intersection([1,2,2,3], [2,3,4]));

// function intersection(arr1,arr2){
//     let set1 = new Set(arr1)
//     let result = new Set()

//     for(let item of arr2){
//         if(set1.has(item)){
//             result.add(item)
//         }
//     }
//     return [...result]
// }

// console.log(intersection([1,2,2,3], [2,3,4]));

// function intersection(arr1, arr2) {
//     let set2 = new Set(arr2)
//     let set1 = new Set(arr1)

//     const result = [...set1].filter(x => set2.has(x))
//     return result

//     // return [...new Set(arr1.filter(x => set2.has(x)))]
// }
// console.log(intersection([1, 2, 2, 3], [2, 3, 4]));

const set = new Set([1,2,3]);
console.log(typeof set);

console.log(Array.isArray(set));
