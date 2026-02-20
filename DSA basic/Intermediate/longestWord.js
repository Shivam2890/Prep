function longestWord(str) {
    let arr = str.split(" ")
    let longest = ""
    
    for(let item of arr){
        if(item.length > longest.length){
            longest = item
        }
    }

    return longest
}

console.log(longestWord("I love programming"));

function longestWord(str){
    let arr = str.split(/\s+/)
    let longstr = arr.reduce((long,curr) => curr.length>long.length ? curr : long,"")
    return longstr
}
console.log(longestWord("I love programming"));
