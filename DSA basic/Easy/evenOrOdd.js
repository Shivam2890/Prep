// function evenOrOdd(n) {
//     return n%2 === 0
// }

// console.log(evenOrOdd(11));
// console.log(evenOrOdd(8));

// function evenOrOdd(n) {
//     return (n % 2 !== 0) ? false : true
// }

// console.log(evenOrOdd(11));
// console.log(evenOrOdd(8));

function evenOrOdd(n) {
    return (n&1) === 0 ? "even":"odd"  // it check the last bit 
    /// if the last bit is 0 then 0&1 is 0 which is even 
    // if the last bit is 1 then 1&1 is 1 which is odd 
    // in even the last bit is 0
    // in odd the last bit is 1
}

console.log(evenOrOdd(11));
console.log(evenOrOdd(8));
