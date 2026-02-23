// function groupByRole(arr) {
//     let result = {}
//     for (let item of arr) {
//         let role = item.role
//         if (!result[role]) {
//             result[role] = []
//         }
//         result[role].push(item)

//     }
//     return result
// }

// console.log(groupByRole(
//     [
//         { name: "Alice", role: "dev" },
//         { name: "Bob", role: "tester" },
//         { name: "Eve", role: "dev" }
//     ]
// ))
// console.log(groupByRole(
//     [
//         { name: "Alice", role: "dev" },
//         { name: "Bob", role: "tester" },
//         { name: "Eve", role: "dev" }
//     ]
// ))
// function groupByRole(arr) {
//     let result = {}
//     for (let item of arr) {
//         result[item.role] ??= [] // this line is basicaly mean that
//         // if (result[item.role] === null || result[item.role] === undefined) {
//         //     result[item.role] = [];
//         // }
//         result[item.role].push(item)
//     }
//     return result
// }
// console.log(groupByRole(
//     [
//         { name: "Alice", role: "dev" },
//         { name: "Bob", role: "tester" },
//         { name: "Eve", role: "dev" }
//     ]
// ))

function groupByRole(arr){
    return arr.reduce((acc,item) => {
        acc[item.role] ??=[];
        acc[item.role].push(item);
        return acc
    } , {})
}

console.log(groupByRole(
    [
        { name: "Alice", role: "dev" },
        { name: "Bob", role: "tester" },
        { name: "Eve", role: "dev" }
    ]
))