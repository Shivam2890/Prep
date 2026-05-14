// function mostFrequentWord(str) {
//     str = str.split(" ")
//     let obj = {}
//     let max = 0
//     let maxStr = ""
//     for (let word of str) {
//         obj[word] = (obj[word] ?? 0) + 1

//         if (obj[word] > max) {
//             max = obj[word]
//             maxStr = word
//         }
//     }
//     return maxStr
// }

function mostFrequentWord(str) {
    str = str.split(" ")
    let map = new Map()
    let max = 0;
    let maxStr = ""
    for (let word of str) {
        map.set(word, (map.get(word) ?? 0) + 1)
        if (map.get(word) > max) {
            max = map.get(word)
            maxStr = word
        }
    }
    return maxStr
}


// Test Case 1
console.log(mostFrequentWord("this is a test this is only a test"));
// Expected Output: "this" or "is" or "test"

// Test Case 2
console.log(mostFrequentWord("apple banana apple orange banana apple"));
// Expected Output: "apple"

// Test Case 3
console.log(mostFrequentWord("hello hello world"));
// Expected Output: "hello"

// Test Case 4
console.log(mostFrequentWord("one"));
// Expected Output: "one"