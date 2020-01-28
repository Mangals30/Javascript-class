/* DOM starts here
<!DOCTYPE html>
<html lang="en">
<head>
    
    <title>Document</title>--- children
</head>
<body>
    
</body>
</html>
html document is taken as javascript object
Above is the document
Browser takes this document as object
in console // document
<body>
    <h1 id = 'title'>First Day Dom</h1>
    <script>
        //const title = document.body
        const title = document.getElementById('title')
        console.log(title)
        title.textContent = 'I like to change the text content'
        title.style.background = 'green'
        title.innerHTML = '<span>This is a DOM</span'
    </script>
    <script src="/DOM/main.js"></script>
</body>
<body>
    <h1>First Day Dom</h1>
    <h1>DOM is document Object model</h1>
    <h1>Using DOM you can build the house</h1>
    <script>
        //const title = document.body
        const title = document.getElementsByTagName('h1')
        console.log(title)

    </script>
    <body>
    <h1>First Day Dom</h1>

    <script>
        //const title = document.body
        const title = document.getElementsByTagName('h1')[0]
        //title.style.background = 'orange'

    </script>
    <script src="/DOM/main.js"></script>
</body>
        titles.array.forEach(element,i => {
            
        })---> will not work

        <body>
    <h1>First Day Dom</h1>
    <h1>DOM is document Object model</h1>
    <h1>Using DOM you can build the house</h1>
    <h1>Using DOM you can build the game</h1>
    <h1>Using DOM you can build the application</h1>
    <script>
        //const title = document.body
        const titles = document.getElementsByTagName('h1')
        console.log(titles)
        const titlesArray = Array.from(titles)
        console.log(titlesArray)
        titlesArray.forEach((element,i) => {
            console.log(i)
        })
        for(const element of titlesArray) {
            console.log(element)
        }

    </script>
    <script src="/DOM/main.js"></script>
</body>
<body>
    <p class = 'DOM'>First Day Dom</p>
    <p class = 'DOM'>DOM is document Object model</p>
    <p class = 'DOM'>Using DOM you can build the house</p>
    <p class = 'DOM'>Using DOM you can build the game</p>
    <p class = 'DOM'>Using DOM you can build the application</p>
    <script>
        //const title = document.body
        const titles = document.getElementsByClassName('DOM')
        console.log(titles)
        const titlesArray = Array.from(titles)
        console.log(titlesArray)
        titlesArray.forEach((element,i) => {
            element.style.fontSize = '24px'
            if (i % 2 ==0 ){
                element.style.color ='green'
            }
            else {
                element.style.color ='red'
            }
    
        })


    </script>
    <script src="/DOM/main.js"></script>
</body>
<body>
    <p class = 'DOM' id = 'first-title'>First Day Dom</p>
    <p class = 'DOM' id = '1'>DOM is document Object model</p>
    <p class = 'DOM' id = '2'>Using DOM you can build the house</p>
    <p class = 'DOM' id = '3'>Using DOM you can build the game</p>
    <p class = 'DOM' id = 'last-title'>Using DOM you can build the application</p>
    <script>
      const firstTitle = document.querySelector('#first-title')
      const firstElement = document.querySelector('p')
      const lastTitle = document.querySelector('#first-title')
      const lastElement = document.querySelector('p')
      //const allTitle = document.querySelectorAll('p')
      const allTitle = document.querySelectorAll('.DOM')
      console.log(firstTitle)
      console.log(firstElement)
      console.log(lastTitle)
      console.log(lastElement)
      console.log(allTitle)
      allTitle.forEach((element,i) => {
          console.log(element)
      })
    </script>
    <script src="/DOM/main.js"></script>
</body>
<body>
<script>
    const title = document.createElement('h1')
    title.textContent = 'First lesson of DOM'
    document.body.append(title)
    console.log(title)
    </script>
</body>
body>
    <div class="flex-container">

    </div>
<script>
   
    const nums = [1,2,3,4,5,6]
    const flexContainer = document.querySelector('.flex-container')
    for (const num of nums) {
        const title = document.createElement('h1')
        const div = document.createElement('div')
        title.textContent = num
        title.className = 'num'
        title.id = 'no' + num
        document.body.appendChild(title)
    }
    </script>
</body>
</html>




<!DOCTYPE html>
<html lang="en">
<head>
    <title>Event Listener</title>
</head>
<body>
    <div>
        <button>Click me</button>
    </div>
    <script>
        const button = document.querySelector('button')
        const gravity = 9.81
        button.addEventListener('click', function () {
            console.log(`Your weight is ${50 * gravity}N`)
        })
    </script>
</body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
    <title>Event Listener</title>
</head>
<body>
    <div>
        <input type="text" id="mass">
        <button>Click me</button>
        <p id = 'weight'></p>
    </div>
    <script>
        const button = document.querySelector('button')
        console.log(button.textContent)
        button.textContent = 'Calculate bmi'
        const massInput =document.querySelector('#mass')
        console.log(mass)
        const gravity = 9.81
        const weight = document.querySelector('#weight')
        button.addEventListener('click', function () {
            const mass = massInput.value
            weight.textContent = mass * gravity
        })
    </script>
</body>
</html>




<!DOCTYPE html>
<html lang="en">
<head>
    <title>Event Listener</title>
</head>
<body>
    <div>
        <div style="margin: 10px;">
        Mass:    
        <input type="text" id="mass" placeholder="Enter the mass">
        </div style="margin: 10px;">
        <div style="margin: 10px;">
        Gravity:    
            <input type="text" id="gravity" placeholder="Enter the gravity">
        </div>
            <div style="margin: 10px;"><button>Click me</button></div>
        <p id = 'weight'></p>
    </div>
    <script>
        const button = document.querySelector('button')
        console.log(button.textContent)
        button.textContent = 'Calculate bmi'
        const massInput =document.querySelector('#mass')
        const gravityInput = document.querySelector('#gravity')
        console.log(mass)
        const weightResult = document.querySelector('#weight')
        button.addEventListener('click', function () {
            const mass = massInput.value
            const gravity = gravityInput.value
            const weight = mass * gravity
            weightResult.textContent = weight + ' N'
        })
    </script>
</body>
</html>



<!DOCTYPE html>
<html lang="en">
<head>
    <title>Event Listener</title>
</head>
<body>
    <div>
        <div style="margin: 10px;">
        Mass:    
        <input type="text" id="mass" placeholder="Enter the mass">
        </div style="margin: 10px;">
        <div style="margin: 10px;">
        Gravity:    
            <input type="text" id="gravity" placeholder="Enter the gravity">
        </div>
            <div style="margin: 10px;"><button>Click me</button></div>
        <p id = 'weight'></p>
    </div>
    <script>
        const button = document.querySelector('button')
        console.log(button.textContent)
        button.textContent = 'Calculate bmi'
        const massInput =document.querySelector('#mass')
        const gravityInput = document.querySelector('#gravity')
        console.log(mass)
        const weightResult = document.querySelector('#weight')
        button.addEventListener('click', function () {
            const mass = massInput.value
            const gravity = gravityInput.value
            const weight = mass * gravity
            weightResult.style.color = 'black'
            if (mass>0 && gravity>0){

            
            weightResult.textContent = weight + ' N'
        }
            else {
                weightResult.textContent = 'Mass and gravity is required!'
                weightResult.style.color = 'red'
            }
        })
    </script>
</body>
</html>



<!DOCTYPE html>
<html lang="en">
<head>
    <title>Event Listener</title>
</head>
<body>
    <div>
        <div style="margin: 10px;">
        Mass:    
        <input type="text" id="mass" placeholder="Enter the mass">
        </div style="margin: 10px;">
        <div style="margin: 10px;">
        Gravity:    
            <input type="text" id="gravity" placeholder="Enter the gravity">
        </div>
            <div style="margin: 10px;"><button>Click me</button></div>
        <p id = 'weight'></p>
    </div>
    <script>
        const button = document.querySelector('button')
        console.log(button.textContent)
        button.textContent = 'Calculate bmi'
        const massInput =document.querySelector('#mass')
        const gravityInput = document.querySelector('#gravity')
        console.log(mass)
        const weightResult = document.querySelector('#weight')
        button.addEventListener('mouseover', function () {
            const mass = massInput.value
            const gravity = gravityInput.value
            const weight = mass * gravity
            weightResult.style.color = 'black'
            if (mass>0 && gravity>0){

            
            weightResult.textContent = weight + ' N'
        }
            else {
                weightResult.textContent = 'Mass and gravity is required!'
                weightResult.style.color = 'red'
            }
        })
    </script>
</body>
</html>



<!DOCTYPE html>
<html lang="en">
<head>
    <title>Event Listener</title>
</head>
<body>
    <div>
        <div style="margin: 10px;">
        Mass:    
        <input type="text" id="mass" >
        <p id="para"></p>
    </div>
    <script>
    const input = document.querySelector('#mass')
    const para = document.querySelector('#para')
    input.addEventListener('input',(event) => {
        //alert('Enter the mass')
        //console.log(event.target.value)
        para.textContent = event.target.value
    })
    </script>
</body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
    <title>Event Listener</title>
</head>
<body>
    <div>
        <div style="margin: 10px;">
        Mass:    
        <input type="text" id="mass" >
        <p id="para"></p>
    </div>
    <script>
    const input = document.querySelector('#mass')
    const para = document.querySelector('#para')
    input.addEventListener('blur',(event) => {
        alert('I am a blur event')
        //console.log(event.target.value)
        para.textContent = event.target.value
    })
    </script>
</body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
    <title>Event Listener</title>
</head>
<body>
    <div>
        <div style="margin: 10px;">
        Mass:    
        <input type="text" id="mass" >
        <p id="para"></p>
    </div>
    <script>
    const input = document.querySelector('#mass')
    const para = document.querySelector('#para')
    input.addEventListener('focus',(event) => {
        //alert('I am a focus event')
        console.log('I am a focus alert')
        para.textContent = event.target.value
    })
    </script>
</body>
</html>

*/