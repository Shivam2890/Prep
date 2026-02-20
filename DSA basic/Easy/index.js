const arr = [10, 20, 30, 20, 40];
// console.log(arr.includes(20))
// console.log(arr.find(n => n>25))
// console.log(arr.filter(n=> n>25))
// console.log(arr.findIndex(n=>n>20)) //first element that matches the condintion
// console.log(arr.every(n=>n>5)) // all the matches the condition

const str = "JavaScript Developer";
// console.log(str.includes("Script")) // containes only substirng
// console.log(str.slice(0,10)) // extract the part
// console.log(str.replace("Developer", "Engineer")) //replace the text
// console.log(str.match(/a/g)) // ["a","a"]

const users = [
    { id: 1, name: "Aman", age: 22 },
    { id: 2, name: "Ravi", age: 25 },
    { id: 3, name: "Neha", age: 20 }
];
// console.log(users.find(u => u.id > 1)) // return only one object
// console.log(users.filter(u => u.id > 1)) // return multiple object
// console.log(users.map(u=>u.name)) // trasfrom the data
// console.log(users.some(u=> u.age<22)) // true or false for any match
// console.log(users.every(u=>u.age<22)) // true or false for all matches/
console.log(users.reduce((sum,u) => sum + u.age, 0)) // 67


