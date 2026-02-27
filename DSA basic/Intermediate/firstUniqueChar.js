// function firstUniqueChar(str) {
//     for (let i = 0; i < str.length; i++) {
//         let count = 0;
//         for (let j = 0; j < str.length; j++) {
//             if (str[i] === str[j]) {
//                 count++;
//             }
//         }
//         if (count === 1){
//             return str[i]
//         }
//     }
// }

// console.log(firstUniqueChar("swiss")); 

function firstUniqueChar(str) {
    let freq = {}
    // count freq
    for(let char of str){
        freq[char] = (freq[char] ?? 0) + 1
    }
    // find first unique
    for(let char of str){
        if(freq[char] === 1){
            return char
        }
    }
}

console.log(firstUniqueChar("swiss"));