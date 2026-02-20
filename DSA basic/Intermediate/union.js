// function union(arr1, arr2) {
//     return [...new Set([...arr1,...arr2])]
// }

// console.log(union([1,2,3], [3,4,5]));

// console.log(...new Set("hello"));


function union(arr1, arr2) {
    let result = []
    for(let item of arr1){
        if(!result.includes(item)){
            result.push(item)
        }
    }
    for(let item2 of arr2){
        if(!result.includes(item2)){
            result.push(item2)
        }
    }

    return result
}

console.log(union([1,2,3], [3,4,5]));

