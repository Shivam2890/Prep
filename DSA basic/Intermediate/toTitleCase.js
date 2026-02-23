// function toTitleCase(str) {
//     const arr = str.split(" ").filter(u => u !== "")
//     return arr.map( word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ")
// }

// console.log(toTitleCase("  hello   WORLD  "));

function toTitleCase(str){
    return str
        .trim()
        .split(/\s+/)
        .map(w => w[0].toUpperCase() + w.slice(1).toLowerCase())
        .join(" ")
}

console.log(toTitleCase("  hello   WORLD  "))