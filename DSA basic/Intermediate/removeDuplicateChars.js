// function removeDuplicateChars(str) {
//   let set =  new Set(str)
//   return [...set].join("")
// }

// console.log(removeDuplicateChars("programming"));

// function removeDuplicateChars(str) {
//     let arr = str.split("")
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i; j < arr.length; j++){
//             if(arr[i]===arr[j]){
//                 arr.splice(j,1);
//             }
//         }
//     }
//     return arr.join("")
// }
// console.log(removeDuplicateChars("programming"));

// function removeDuplicateChars(str) {
//     let result = "";

//     for (let i = 0; i < str.length; i++) {
//         let duplicate = false;

//         for (let j = 0; j < i; j++) {
//             if (str[i] === str[j]) {
//                 duplicate = true;
//                 break;
//             }
//         }

//         if (!duplicate) {
//             result += str[i];
//         }
//     }

//     return result;
// }

// console.log(removeDuplicateChars("programming"));

// function removeDuplicateChars(str) {
//   let result = ""
//   for(let char of str){
//     if(!result.includes(char)){
//         result += char;
//     }
//   }
//   return result
// }

// console.log(removeDuplicateChars("programming"));