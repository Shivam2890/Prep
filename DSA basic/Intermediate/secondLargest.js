function secondLargest(arr) {
    let first = -Infinity;
    let second = -Infinity;

    for (let i of arr) {
        if (i > first) {
            second = first
            first = i
        } else if(i < first && i > second)
        second = i;
    }

    return second
}

console.log(secondLargest([10, 40, 5, 20, 8, 50, 45]));
