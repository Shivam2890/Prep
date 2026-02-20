// function charFrequency(str) {
//     let arr = [...str]
//     let map = new Map()
//     let maxCount = 0;
//     let mostFrequentCh = null;

//     for (let ch of arr) {
//         const count = (map.get(ch) ?? 0) + 1
//         map.set(ch, count)

//         // if (count > maxCount) {
//         //     maxCount = count;
//         //     mostFrequentCh = ch
//         // } we have to return frequcny of charchter
//     }

//     // console.log(map)
//     return map
// }

// console.log(charFrequency("apple"));

// function charFrequency(str) {
//     // let arr = [...str] // dont need because in string we can read but not update
//     let obj = {}
//     let maxCount = 0;
//     let result = null;
//     for(let ch of str){
//         obj[ch] = (obj[ch]??0) + 1

//         // if(obj[ch]> maxCount){
//         //     maxCount = obj[ch]
//         //     result = ch
//         // } // we have to return frequnecy of charcter not the most frequent charcter
//     }

//     return obj
// }

// console.log(charFrequency("apple"));
//
// function charFrequency(str) {
//     let arr = str.split('')
//     let maxCount = 0;
//     let result = null
//     console.log(arr.length)
//     for(let i = 0; i<arr.length; i++) {
//         let count  = 0;
//         for(let j=0; j<arr.length; j++){
//             if(arr[i] === arr[j]){
//                 count++;
//             }
//         }
//         if(count>maxCount){
//             maxCount = count;
//             result = arr[i]
//         }
//     }
//     return result
// }

// console.log(charFrequency("apple"));

function charFrequency(str) {
    let result = {}

    for (let i = 0; i < str.length; i++) {
        let count = 0;


        if(result[str[i]]) continue; // skip if already counted

        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                count++
            }
        }
        result[str[i]] = count
    }
    return result
}

console.log(charFrequency("apple"))  //{ a: 1, p: 2, l: 1, e: 1 }