function arrayAverage(arr) {
    let sum = 0;
    if(arr.length == []){
        return 0;
    }
    for (let i = 0; i < arr.length; i++) {
        sum +=arr[i]
    }
    return sum/arr.length
}

console.log(arrayAverage([10, 20, 30]));
