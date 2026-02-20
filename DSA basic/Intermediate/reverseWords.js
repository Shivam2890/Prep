function reverseWords(str) {
  const arr = str.split(" ").filter(x => x != "")
  let start = 0;
  let last = arr.length-1;
  // console.log(arr[last])
  while(start < last){
    [arr[start],arr[last]] = [arr[last],arr[start]]
    start++;
    last--;
  }
  return arr.join(" ");
}

console.log(reverseWords("  Hello   World  "));


