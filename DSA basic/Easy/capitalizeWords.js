// https://leetcode.com/problems/capitalize-the-title/description/
// function capitalizeWords(str) {
//     let newArr = str.split(" ")
//     return newArr
//         .map(word => word.at(0).toUpperCase() + word.slice(1))
//         .join(" ")
// }
// console.log(capitalizeWords("i love javascript")); 

// function capitalizeWords(str) {
//     let arr = str.split(" ")
//     let result = []
//     for(let i = 0; i< arr.length; i++){
//         let newArr = arr[i]
//         let capWord = newArr[0].toUpperCase() + newArr.slice(1)
//         result.push(capWord)
//     }
//     return result.join(" ")
// }

// console.log(capitalizeWords("i love javascript"));

function capitalizeWords(str) {
    let result = ""
    let capNext = true;

    for (let ch of str) {
        if (ch === " ") {
            result += ch; // if there are white space then add to my result and 
            // change to capNext to true 
            // so the next first charcyer can be uooercase
            capNext = true;
        } else if (capNext) {
            result += ch.toUpperCase();
            capNext = false // after first character again change to falese
            // or jab tak false rahega jab ki white space nhi ayega 
        } else {
            result += ch //abhi white space nhi hai to normal add krty rhe
        }
    }
    return result
}

console.log(capitalizeWords("i love javascript"));








