// function swap(a, b) {
//     a = a + b;
//     b = a - b;
//     a = a - b;
//     return[a,b]
// }

// console.log(swap(5, 10));

function swap(a, b) {
    a = a ^ b;
    b = a ^ b;  // (a ^ b) ^b = a
    a = a ^ b;  // (a ^ b) ^ a = b (b mere a hogya)
    return [a, b]
}

console.log(swap(5, 10))