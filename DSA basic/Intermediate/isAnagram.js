function isAnagram(s1, s2) {
  if (s1.length != s2.length) return false
  let arr1 = [...s1]
  let arr2 = [...s2]

  for (let item of arr1) {

    if (!arr2.includes(item)) {
      return false
    } else {
      let index = arr2.indexOf(item)
      arr2.splice(index, 1)
    }

  }
  return true

}

console.log(isAnagram("aaccq", "caacq"));

function isAnagram(s1, s2) {
  if (s1.length !== s2.length) return false;

  let obj = {}

  for (let ch of s1) {
    obj[ch] = (obj[ch] ?? 0) + 1
  }
  for(let ch of s2){
    if(!obj[ch]) return false
    obj[ch]--  
  }
  return true
}

console.log(isAnagram("listten", "silentt"));

function isAnagram(s1, s2) {
  let map = new Map()
  for (let ch of s1) {
    let count = (map.get(ch) ?? 0) + 1
    map.set(ch, count)
  }
  for (let ch of s2) {
    if (!map.has(ch) || map.get(ch) === 0) return false
    map.set(ch, map.get(ch) - 1)
  }
  console.log(map)
  return true
}

console.log(isAnagram("listten", "silentt"));
