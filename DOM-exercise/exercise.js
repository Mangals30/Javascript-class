//Create an index.html file and put four p elements as above: 
//Get the first paragraph by using document.querySelector(tagname) 
//and tag name
const pquery = document.querySelector('p')
console.log('pquery',pquery)
const ptagsColl = document.getElementsByTagName('p')
const ptag = ptagsColl[0]
console.log('ptag',ptag)
//Get get each of the the paragraph using document.querySelector
//('#id') and by their id
const ptags = Array.from(ptagsColl)
console.log(ptags)
for(let i = 0; i<ptags.length; i++){
    //console.log(ptags[i])
    ptags[i].setAttribute('id','id-'+(i+1))
    ptags[i].setAttribute('class','paragraphs')
    //console.log(ptags[i])
}
const id1ById = document.getElementById('id-1')
const id2ById = document.getElementById('id-2')
const id3ById = document.getElementById('id-3')
const id4ById = document.getElementById('id-4')
console.log(id1ById, id2ById, id3ById, id4ById)

const id1ByQuery = document.querySelector('#id-1')
const id2ByQuery = document.querySelector('#id-2')
const id3ByQuery = document.querySelector('#id-3')
const id4ByQuery = document.querySelector('#id-4')
console.log(id1ByQuery, id2ByQuery, id3ByQuery, id4ByQuery)

//Get all the p as nodeList using document.querySelectorAll
//(tagname) and by their tag name
const nodeListP = document.querySelectorAll('p')
const htmlCollP = document.getElementsByTagName('p')
console.log(nodeListP)
console.log(htmlCollP)

//Loop through the nodeList and get the text content of 
//each paragraph
const pQueryConts = Array.from(nodeListP)
const pTagConts = Array.from(htmlCollP)
for (const pQueryCont of pQueryConts) {
    console.log(pQueryCont)
}
for(const pTagCont of pTagConts){
    console.log(pTagCont)
}
//Set a text content to paragraph the fourth paragraph,Fourth Paragraph
const pfour = document.querySelector('#id-4')
pfour.textContent = 'Fourth Paragraph'

//Set id and class attribute for all the paragraphs using 
//different attribute setting methods

//Change stye of each paragraph using JavaScript
//(eg. color, background, border, font-size, font-family)
const p1 = document.getElementById('id-1')
const p2 = document.getElementById('id-2')
const p3 = document.getElementById('id-3')
const p4 = document.getElementById('id-4')
p1.style.background = 'yellow'
p2.style.background = 'lightblue'
p3.style.background = 'lightgreen'
p4.style.background = 'orange'
const pclassColl = document.getElementsByClassName('paragraphs')
const pClasses = Array.from(pclassColl)
for (const pClass of pClasses) {
    pClass.style.color= 'red'
    pClass.style.fontSize ='50px'
    pClass.style.border ='2px solid brown'
}
//Select all paragraphs and loop through each elements and
// give the first and third paragraph a color of color, and the second and the fourth paragraph a red color
for (let i=0; i<pClasses.length; i++) {
    if (i % 2 ==0) {
        pClasses[i].style.background = 'yellow'
    }
    else {
        pClasses[i].style.background = 'lightgreen'
    }
}

//Remove all the paragraph and 
//create them using JavaScript
const p5 = document.createElement('p')
const p6 = document.createElement('p')
const p7 = document.createElement('p')
const p8 = document.createElement('p')
//Set text content, id and class to each paragraph
p5.textContent = 'Fifth Paragraph'
p6.textContent = 'Sixth Paragraph'
p7.textContent = 'Seventh Paragraph'
p8.textContent = 'Eighth Paragraph'
const allPs = document.getElementsByTagName('p')
for (i = 4; i<allPs.length; i++) {
    allPs[i].setAttribute('id','id-' + (i+1))
    allPs[i].setAttribute('class','paragraphs')
}

const flexContainer = document.querySelector('.flex-container')
for (let i =0; i<100; i++){
     const num = document.createElement('h3')
     const div = document.createElement('div')
     div.setAttribute('class','box')
     num.textContent = i+1
     div.style.width = '150px'
     div.style.height = '150px'
         if (i % 2 == 0){
             div.style.background = 'lightgreen'
         }
         else {
            div.style.background = 'lightblue'
         }

     div.appendChild(num)
     flexContainer.appendChild(div)
     
     
}
//Use the rgb color generator function or hexaColor generator 
//to create 10 divs with random background colors
const componentRGB = value=> value.toString(16)

const rgbGenerator = hexa => {
    const rgb = []
    const nohash = hexa.slice(1)
    const value1 = nohash.slice(0,2)
    const value2 = nohash.slice(2,4)
    const value3 = nohash.slice(4,6)
    rgb.push(componentRGB(value1),componentRGB(value2),componentRGB(value3))
    return rgb
}
const rgbContainerClass = document.querySelector('.rgb-container')
const rgbdiv = document.createElement('div')
const inputHexa = document.createElement('input')
const outputDiv = document.createElement('div')








