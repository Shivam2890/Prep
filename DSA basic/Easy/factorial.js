// function factorial(n) {
//     let fact = 1;
//     if (n < 0) return undefined;

//     for (let i = n; i >= 1; i--) {
//         fact = fact * i
//     }
//     return fact
// }
// console.log(factorial(5))

function factorial(n){
    if(n===0) return 1
    
    return n * factorial(n-1)
}
console.log(factorial(5))