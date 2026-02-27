function findPairs(arr, k) {
    let result = []
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) == k) {
                result.push([arr[i], arr[j]])
            }
        }
    }
    return result
}

console.log(findPairs([1, 2, 3, 4, 5], 6));