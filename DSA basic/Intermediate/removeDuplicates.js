// function removeDuplicates(arr) {
//     return [...new Set(arr)] // now its giving the arr by wraping under the [] otherwise it return the object 
// }

// console.log(removeDuplicates([1, 2, 2, 3, 1, 4]));

// function removeDuplicates(arr) {
//     return arr.filter((item,index) => 
//         arr.indexOf(item) === index
//     )
// }

// console.log(removeDuplicates([1, 2, 2, 3, 1, 4]));

// const arr = new Set() 
// arr.add(10)
// arr.add(20)
// arr.add(10)
// console.log(arr)
// const obj = {};


// obj[true] = "hello";
// obj[123] = "world";
// console.log(obj)

// const map = new Map();
// map.set(true, "hello");
// map.set(123, "world");
// console.log(map)

// const user = { id: 1 };

// const map = new Map();
// map.set(user, "Admin");

// console.log(map.get(user)); // Admin

function secondLargest(arr) {
    const map = new Map()
    for (let item of arr) {
        if (!map.has(item)) {
            map.set(item,true)
        }
    }
    return [...map.keys()]
}

console.log(secondLargest([10, 5, 20, 8]));


