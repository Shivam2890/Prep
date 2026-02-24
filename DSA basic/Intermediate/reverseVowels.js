function reverseVowels(str) {
    let arr = str.split("")
    let set = new Set(["a", "e", "i", "o", "u"])
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (!set.has(arr[left])) { left++; continue }
        if (!set.has(arr[right])) { right--; continue }

        console.log("left", left, "rigth  ", right)

        // if (set.has(arr[left]) && set.has(arr[right])) 
            {
            [arr[left], arr[right]] = [arr[right], arr[left]]
        }


        left++
        right--

    }
    return arr.join('')
}
console.log(reverseVowels("leetcode"));


function swapVowels(str){
    let i =0;
    let j = str.length - 1
    const vowels = "aeiou"


    const arr = str.split("")

    while(i < j){

        // If arr[i] is not vowel increase i
        if(!vowels.includes(arr[i])){
            i++
        }else if(!vowels.includes(arr[j])){
            j--
        }
        // swap & i++; j--
        if(vowels.includes(arr[i]) && vowels.includes(arr[j])){
            const temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp

            i++
            j--
        }
    }
    return arr.join('')

}

swapVowels("leeuiode")

function reverseVowels(str) {
    let arr = str.split("")
    let i = 0;
    let j = arr.length - 1
    let vowel = "aeiouAEIOU"

    while (i < j) {
        //skip non vowel
        while (i < j && !vowel.includes(arr[i])) {
            i++;
        }
        while (i < j && !vowel.includes(arr[j])) {
            j--;
        }

        //Swap
        [arr[i], arr[j]] = [arr[j], arr[i]]
        i++;
        j--
    }

    return arr.join(' ')
}
console.log(reverseVowels("leetcode"));
