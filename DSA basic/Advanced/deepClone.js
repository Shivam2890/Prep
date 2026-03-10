function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj
    }

    const copy = Array.isArray(obj) ? [] : {}

    for (let key in obj) {
        copy[key] = deepClone(obj[key])
    }

    return copy
}

const obj = { a: 1, b: { c: 2 }, d: [1, 2, 3] }

const copy = deepClone(obj)

copy.b.c = 99

console.log(obj.b.c) // 2


// function deepClone(obj) {
//     if(obj === null || typeof obj !== 'object'){
//         return obj
//     }

//     const copy = Array.isArray(obj) ? [] : {}

//     for(let key in obj){
//         copy[key] = deepClone(obj[key])
//     }
//     return copy
// }

// const obj = { a: 1, b: { c: 2 }, d: [1, 2, 3] }

// console.log(deepClone(obj))

// const copy = deepClone(obj)

// copy.b.c = 99

// console.log(obj.b.c) // 2

// modern methond
// const obj = { a:1, b:{c:2}, d:[1,2,3] }

// const copy = structuredClone(obj)

// copy.b.c = 99

// console.log(obj.b.c) // 2