console.log('Welcome to sets and maps')
//does not work with for (i)
//Key acts as an index in Map
const numSet = new Set()
numSet.add(0)
numSet.add(1)
console.log(numSet)
const numbers = [0,1,2,3,4,5,6]
for (const num of numbers) {
   numSet.add(num)
}
console.log(numSet)
const numbers1 = [1,1,2,3,3,5]
const numSet1 = new Set(numbers1)
console.log(numSet1)
for (const set of numSet1) {
    console.log(set)
}
console.log(numSet1.has(1))
numSet1.delete(1)
console.log(numSet1)
numSet1.clear()
console.log(numSet1)
const languages = ['Finnish','English','English','French','Spanish','Arabic']
const setLangs = new Set (languages)
console.log(setLangs)
const langArr = new Map()
for (const set of setLangs) {
    let count = 0
    for (const lang of languages) {
        if (set == lang) {
          count++
        }
    }
    langArr.set(set,count)
}
console.log(langArr)
//Map: 
const map = new Map()
map.set('Finland','Helsinki')
map.set('Sweden','Stockholm')
map.set('Latvia','Rega')
map.set('Estonia','Tallin')
console.log(map)
const numArr = [[1,1],[2,2],[3,3],[4,4],[1,1]]
const numMap = new Map(numArr)
console.log(numMap)
console.log(map.has('Finland'))
console.log(map.has('Helsinki'))
const key = 'Finland'
console.log(map.get(key))
map.delete('Finland')
console.log(map)
console.log(map.delete('Fin'))
console.log(map.size)
//map.clear()
for(const maps of map) {
    console.log(maps)
}
console.log(map)
for (const [name,city] of map) {
    console.log(name, city)
}
map.forEach((country,city) => console.log(country,city))
/*const x = map.map(country => country.toLowerCase())
console.log(x)
const a = {a:1,b:2,c:3}
a.forEach(alpha => console.log(alpha))*/

