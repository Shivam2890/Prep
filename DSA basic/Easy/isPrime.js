// function isPrime(n) {
//     if (n < 2) return false;
//     for (let i = 2; i*i < n; i++) {
//         if (n % i === 0){
//             return false
//         }
//     }
//     return true
// }
// console.log(isPrime(12))

function isPrime(n) {
    if (n < 2) return 0;
    let count = 0;

    for (let i = 2; i * i <= n; i++) {
        if (n % i !== 0) {
            count++
        }
    }
    return count
}
console.log(isPrime(5))