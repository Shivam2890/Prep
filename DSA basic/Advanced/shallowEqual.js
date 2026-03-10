// function shallowEqual(obj1, obj2) {
//     for (let key1 in obj1) {
//         for (let key2 in obj2) {
//             if (key1 === key2) {
//                 if (obj1[key1] !== obj2[key2]) {
//                     return false
//                 }
//             }
//         }
//     } 
//     return true
// }

// console.log(shallowEqual({ a: 1, b: 2 }, { a: 1, b: 2 }))
// console.log(shallowEqual({ a: 1, b: 2 }, { a: 1, b: 3 }))

function shallowEqual(obj1, obj2) {
    const key1 = Object.keys(obj1)
    const key2 = Object.keys(obj2)

    for(let key of key1){
        if(obj1[key] !== obj2[key]){
            return false
        }
    }
    return true
}

console.log(shallowEqual({ a: 1, b: 2 }, { a: 1, b: 2 })) // true
console.log(shallowEqual({ a: 1, b: 2 }, { a: 1, b: 3 })) // false