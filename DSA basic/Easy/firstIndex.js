// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

function firstIndex(str, ch) {
    ch = ch.toLowerCase()
  for(let i = 0; i<str.length; i++){
    if(str[i].toLowerCase() === ch){
        return i;
    }
  }
  return -1;
}

console.log(firstIndex("javascript", "a"));
