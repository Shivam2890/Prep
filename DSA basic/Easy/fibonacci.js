// function fibonacci(n){
//     if(n<=1) return n;
//     return fibonacci(n-2)+fibonacci(n-1)
// }
// console.log(fibonacci(6))

// function fibonacci(n) {
//     if (n <= 1) return n;
//     let a = 0;
//     let b = 1;
//     for (let i = 2; i <= n; i++) {
//         [a, b] = [b, a + b]
//     }
//     return b
// }
// console.log(fibonacci(4))

// function fibonacci(n) {
//     if (n === 0) return [0]
//     if (n === 1) return [0,1]

//     let arr = [0, 1];

//     for (let i = 2; i<n; i++){
//         arr.push(arr[i-1]+arr[i-2])
//     }
//     return arr;
// }
// console.log(fibonacci(6))

function fibonacci(n){
    if(n===0) return [0]
    if(n===1) return [0,1]
    let arr = [0,1]
    for(let i =2 ; i<n; i++){
        arr.push(arr[i-2]+arr[i-1])
    }
    return arr
}

console.log(fibonacci(6))