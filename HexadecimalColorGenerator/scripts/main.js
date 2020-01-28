/*Declaration of global variables*/ 
const searchResultDiv = document.querySelector('#search-result')
const generate = document.querySelector('#generate')   
const stop = document.querySelector('#stop') 
let inputValue = ''
let colorTimer = '' 
let stopButton = 0
let copyTimer = ''

/*Function to generate hexadecimal color code*/ 
const randomHexaId = () => {
    let hexaChar= '0123456789abcdef'
    let hexaLen = hexaChar.length
    let hexaId = '#'
    for (let i=0; i<6; i++) {
        let hexaIdIndex = Math.floor(Math.random()*hexaLen)
        hexaId = hexaId + hexaChar[hexaIdIndex]

    }
    
    return hexaId
}

/*Function to copy the color code to clipboard when copy button is clicked*/ 
const copyHexaId = (id) => {
    let inputField = document.createElement('input')
    document.body.appendChild(inputField)
    inputField.value = id
    inputField.select()
    document.execCommand('copy')
    inputField.remove()

}

/*Function to display the error message if the input number is not greater then or equal to 5*/ 
const errorMessage = () => {
    searchResultDiv.textContent = ''
    const divError = document.createElement('div')
    let errorMessage = '*Enter a number greater than or equal to 5'
    divError.textContent = errorMessage
    divError.style.color = 'red'
    divError.style.marginRight ='35rem'
    searchResultDiv.appendChild(divError)
    
}

/*Function to create the div colors and the copy buttons.*/
/*Event listeners of copy button is also included in this function*/  
const divCreate = () => {
    const divColors = document.createElement('div')
    divColors.setAttribute('class','divColors')
    const copyButton = document.createElement('button')
    copyButton.setAttribute('class','copy')
    copyButton.textContent= 'Copy'
    const hexaColorId = randomHexaId()
    divColors.append(hexaColorId)
    divColors.append(copyButton)
    divColors.style.background = hexaColorId
    searchResultDiv.appendChild(divColors)
    copyButton.addEventListener('click', (event) =>
       {
        stopButton = 1   
        stopInterval()
        copyHexaId(hexaColorId) 

        let seconds = 13;
        let copiedTimer = setInterval(() =>{ 
        copyButton.textContent = 'Copied'    
        seconds -= 1;
          if(seconds <= 0){
            clearInterval(copiedTimer);
            copyButton.textContent = 'Copy'
          }
        }, 1000);

        })

    copyButton.addEventListener('mouseover', (event) =>
       { 
        stopInterval()
        copyButton.style.background = '#778899' 
        })  
    
    copyButton.addEventListener('mouseout', (event) =>
        {   
            copyButton.style.background = ''
            if (stopButton == 0) {
            if (inputValue.length==0) {
                copyTimer = setInterval(homePage,2000)
               }
               else {
                copyTimer = setInterval(generateColors,2000)    
               }
            }
        })      
}

/*Function to generate the colors or error message when the generate button is clicked*/     
const generateColors = () => {
    searchResultDiv.textContent = ''
    if ((inputValue<5) || !inputValue.match(/^[0-9]*$/)) {
        errorMessage()
    }
    else {
    
        for (let i=0; i<inputValue;i++) {  
           divCreate()  
        }   
    }
}

/*Functions to stop the timer when stop or copy is clicked*/
const stopInterval = () => {
    clearInterval(copyTimer)   
    clearInterval(homePageTimer)   
    clearInterval(colorTimer)
}

/*Function to create five default colors in the home page*/ 
const homePage = () => {
    searchResultDiv.textContent = ''    
    for (let i=0; i<5;i++) {
        divCreate()
    }
 }

/*Event listener for generate button*/ 
generate.addEventListener('click', () => {
    stopInterval()
    stopButton = 0
    const inputNumber = document.querySelector('#number') 
    inputValue = inputNumber.value
    generateColors()
    colorTimer = setInterval(generateColors,2000)
    
})

/*Event listener for stop button*/ 
stop.addEventListener('click', () => {
    stopButton = 1
    stopInterval()
})


/*Function call to load the home page*/ 
homePage()

/*Setting the timer for the home page*/ 
const homePageTimer = setInterval(homePage,2000)

