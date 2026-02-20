// function reverseString(str) {
//     const revString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         revString += str[i]
//     }
//     return revString;
// }
// console.log(reverseString("hello"))

// function revString(str) {
//     const strArray = str.split("");
//     strArray.reverse()
//     const reverseString = strArray.join("")
//     return reverseString
// }

// console.log(revString("hello"))

// function revString(str) {
//     let arr = str.split("")
//     let left = 0;
//     let right = arr.length - 1;
//     while (left < right) {
//         [arr[left], arr[right]] = [arr[right], arr[left]]
//         left++;
//         right--
//     }

//     return arr.join("")
// }
// console.log(revString("hello"))

// const reverseString = (str) => str.split("").reverse().join("")
// console.log(reverseString("hello"))

function reversestringRecursive(str) {
    if (str === "") {
        return "";
    } else {
        return reversestringRecursive(str.substring(1)) + str.charAt(0)
    }
}

console.log(reversestringRecursive("hello"))