function longestSubstring(str) {
  let arr = str.split("")
  let result = []
  let count = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i])
      count++
    }
    else {
      result = []
      if (max < count) {
        max = count
        count = 0
        i--
      }
      // max = Math.max(max, count)
      // count = 0
    }
  }
  return max
}

console.log(longestSubstring("abcabcbb")) // 3
console.log(longestSubstring("pwwkew")) // 3 but it give me 2
console.log(longestSubstring("bbbb")) // 1



