// function compressString(str) {
//     let map = new Map()
//     for (let item of str) {
//         map.set(item, (map.get(item) ?? 0) + 1);
//     }
//     // return ([...map].join(",").split(",").join("")).split("")
// }

function compressString(chars) {
    let count = 1;
    let p = 0;
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === chars[i + 1]) {
            count++;
            // console.log(count)
        } else {
            chars[p] = chars[i]
            if (count > 1) {
                let arr = []
                while (count) {
                    let digit = count % 10
                    count = Math.floor(count / 10)
                    arr.push(digit)
                }
                arr.reverse()
                for (let item of arr) {
                    console.log(item)
                    chars[p + 1] = item.toString()
                    p++
                }
                count = 1
            }
        }
        chars.splice(p + 2)
        // return chars.length;
        // return chars
    }
}

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let count = 1;
    let p = 0;
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === chars[i + 1]) {
            count++;
        } else {
            chars[p] = chars[i]
            p++
            if (count > 1) {
                for (let item of count.toString()) {
                    chars[p] = item
                    console.log(chars)
                    p++
                }
            }
            count = 1
        }
    }
    chars.splice(p)
    return p;
};

// Test Case 1
console.log(compressString(["a", "a", "b", "b", "c", "c", "c"]));
// Expected Output: "a3b2c1d3"

// Test Case 2
console.log(compressString(["a"]));
// Expected Output: "a1b1c1d1"

// Test Case 3
console.log(compressString(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]));
// Expected Output: "w4a3d1e1x6"

