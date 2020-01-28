const setEle = new Set()
setEle.add(1)
setEle.add(2)
setEle.add(3)
setEle.add(4)
console.log(setEle)
const arrele = Array.from(setEle)
console.log(arrele)

const allTitleTags = document.getElementsByTagName('h1')
console.log('allTitleTags',allTitleTags)
const titleTags = Array.from(allTitleTags)
console.log('titleTags',titleTags)
for (const titleTag of titleTags) {
    console.log('titleTag',titleTag)
}
const allTitleClasses = document.getElementsByClassName('title')
console.log('allTitleClasses',allTitleClasses)
const titleClasses = Array.from(allTitleClasses)
console.log('titleClasses',titleClasses)
for(const titleClass of titleClasses) {
    console.log('titleClass',titleClass)
}
const id1Title = document.getElementById('id1')
console.log(id1Title)
const id2Title = document.getElementById('id2')
console.log(id2Title)
const id3Title = document.getElementById('id3')
console.log(id3)

const titleTag = document.querySelector('h1')
console.log('titleTag',titleTag)
const titleClass = document.querySelector('.title')
console.log('titleClass',titleClass)
const titleId = document.querySelector('#id2')
console.log('titleId',titleId)
const queryAllTitleTags = document.querySelectorAll('h1')
console.log('titleTag',queryAllTitleTags)
const queryTitleTags = Array.from(queryAllTitleTags)
console.log('queryTitleTags',queryTitleTags)
for (const queryTitleTag of queryTitleTags) {
    console.log('queryTitleTag',queryTitleTag)
}
const queryAllClassTitles = document.querySelectorAll('.title')
console.log('queryClassTitles',queryAllClassTitles)
const queryClassTitles = Array.from(queryAllClassTitles)
console.log('queryClassTitles',queryClassTitles)
for (const queryClassTitle of queryClassTitles) {
    console.log('queryClassTitle', queryClassTitle)
}

id1Title.textContent = 'Title1 is changed by getElement by Id'
id1Title.style.color ='green'

id2Title.textContent = 'Title2 is changed by getElement by Id'
id2Title.style.color = 'red'

id3Title.textContent = 'Title3 is changed by getElement by Id'
id3Title.style.color = 'blue'

for (let i = 0; i<titleClasses.length; i++) {
    titleClasses[i].style.background = 'orange'
}
titleClasses.innerHTML = '<span>This is DOM</span>'
const titles1 = document.getElementsByTagName('h1')[0]
console.log('titles1',titles1)
titles1.style.background = 'yellow'
const allSubTitles = document.getElementsByClassName('sub-title')
console.log(allSubTitles)
const subTitles = Array.from(allSubTitles)
console.log(subTitles)
for (let i=0; i<subTitles.length; i++) {
    subTitles[i].style.color = 'lightblue'
    if (i %2 ==0) {
        subTitles[i].style.background = 'darkgreen'
    }
    else {
        subTitles[i].style.background = 'darkred'
    }
}
const newElement = document.createElement('h3')
newElement.textContent = 'Element created'
document.body.append(newElement)
//document.body.prepend(newElement)
const flexContainer = document.querySelector('.flex-container')
for (let i = 0; i<100; i++) {
    const title = document.createElement('h3')
    const divElement = document.createElement('div')
    title.textContent = i
    divElement.style.flexDirection = 'row'
    //divElement.style.setAttribute('width','100px')
    divElement.style.textAlign = 'center'
    divElement.setAttribute('class','num')
    divElement.setAttribute('class','num-'+i)
    divElement.style.border = '2px solid #444'
    if (i % 2 == 0) {
        divElement.style.background = 'darkred'
    }
    else {
        divElement.style.background = 'darkgreen'
    }
    divElement.appendChild(title)
    flexContainer.append(divElement)
    const div = document.createElement('div')
    div.style.height = '10px'
    flexContainer.append(div)
}
console.log('before button')
const button = document.querySelector('button')
button.addEventListener('click',e => {
console.log('e.target',e.target)
})
const mass = document.querySelector('#mass')
const height = document.querySelector('#height')
const calcButton = document.querySelector('#calculate')
let bmi
calcButton.addEventListener('click',() => {
bmi = Math.round((mass.value / ((height.value) ** 2)))
console.log('bmi',bmi)
const bmiDiv = document.createElement('div')
bmiDiv.style.marginLeft ='8%'
bmiDiv.style.padding = '5px'
bmiDiv.textContent = 'Your BMI is'+bmi
const bmiMain = document.querySelector('#calc')
bmiMain.append(bmiDiv)
})