// function countVowelsAndConsonants(s) {
//     let v = ["a", "e", "i", "o", "u"]
//     let vowel = 0, cons = 0;
//     for (let i = 0; i < s.length; i++) {

//         let ch = s[i].toLowerCase();

//         if (ch >= "a" && ch <= "z") {
//            v.includes(ch) ? vowel++ : cons++;
//         }
//     }
//     console.log("vownemm", vowel, "consonants", cons)
// }
// countVowelsAndConsonants("fff")

function countVowelsAndConsonants(s) {
    let v = new Set(["a", "e", "i", "o", "u"])
    let vowel = 0, cons = 0;

    for (let ch of s.toLowerCase()) {
        if (ch >= "a" && ch <= "z") {
            v.has(ch) ? vowel++ : cons++
        }
    }
    return { vowel, cons }
}

console.log(countVowelsAndConsonants(""))