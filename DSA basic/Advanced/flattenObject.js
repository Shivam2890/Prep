function flattenObject(obj, parent) {
    let result = {}

    const generateFlattenObject = (obj, parent) => {
        for (let key in obj) {
            let newParent = parent + key
            const value = obj[key]
            if (typeof value === 'object') {
                generateFlattenObject(value, newParent + ".")
            } else {
                result[newParent] = value
            }
        }
    }
    generateFlattenObject(obj, parent)
    return result
}
console.log(
    flattenObject({
        a: "12",
        b: 23,
        c: {
            p: 23,
            0: {
                l: 56
            },
            q: [1, 2]
        }
    }, "")
);


// function flattenObject(obj, parent = "", result = {}) {
//     for (let key in obj) {
//         // console.log(key)
//         const value = obj[key]
//         const newKey = parent ? parent + "." + key : key

//         if (typeof value === 'object') {
//             flattenObject(value, newKey, result)
//         } else {
//             result[newKey] = value
//         }
//     }
//     // console.log(obj)

//     return result
// }

// console.log(
//     flattenObject({
//         a: 1,
//         b: { c: 2, d: 3 }
//     })
// );