// function countDigits(n) {
//     let count = 0
//     do {
//         n = Math.floor(n / 10)
//         count++;
//     } while (n !== 0)
//     return count
// }

// console.log(countDigits(12345));

function countDigits(n){
    return Math.abs(n).toString().length
}
console.log(countDigits(123455))