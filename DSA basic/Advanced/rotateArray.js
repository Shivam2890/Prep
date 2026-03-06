// function rotateArray(arr, k) {
//     if (k > arr.length) {
//         k = k % arr.length;
//     }
//     let newArr = []
//     for (let i = arr.length - k; i < arr.length; i++) {
//         newArr.push(arr[i])
//     }
//     for (let i = 0; i < arr.length - k; i++) {
//         newArr.push(arr[i])
//     }
//     return newArr
// }

// console.log(rotateArray([1, 2, 3, 4, 5], 2));

// function rotateArray(arr, k) {
//     let n = arr.length;
//     k %= n;

//     for(let i =0; i<k; i++){
//         arr.unshift(arr.pop())
//     }
//     return arr
// }

// console.log(rotateArray([1,2,3,4,5], 2));

function rotateArray(arr, k) {
    let n = arr.length - 1;
    k %= arr.length;
    function Reverse(l, r) {
        while (l < r) {
            [arr[l], arr[r]] = [arr[r], arr[l]]
            l++;
            r--;
        }
    }

    Reverse(0, n)
    Reverse(0, k - 1)
    Reverse(k, n)
    return arr;

}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
