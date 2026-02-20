// function isPalindrome(str) {
//     let arr = str.split("")
//     let left = 0;
//     let right = str.length - 1;

//     while(left<right){
//         [arr[left], arr[right]] = [arr[right], arr[left]]
//         left++;
//         right--;
//     }
//     if(arr.join("")==str){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(isPalindrome(""))

// function isPalindrome(s) {
//     let left = 0;
//     let right = s.length-1;
//     while(left<right){
//         if(s[left] !== s[right]){
//             return false
//         }
//         left++;
//         right--;
//     }
//     return true;
// }
// console.log(isPalindrome("olololo"))
// for (let ch of "abc") {
//   console.log(ch);
// }
// for (let [n,i] of Object.entries("hello")) {
//   console.log(n,i);
// }

function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !isAlphaNum(s[left])) left++;
        while (left < right && !isAlphaNum(s[right])) right--;
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false
        }
        left++;
        right--;
    }
    return true
}

function isAlphaNum(char) {
    return (
        (char >= "a" && char <= "z") ||
        (char >= "A" && char <= "Z") ||
        (char >= "0" && char <= "9")
    )
}

console.log(isPalindrome("@Ra#c$%eca@r@@"))