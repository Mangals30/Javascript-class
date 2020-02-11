console.log('Welcome to charts and bars')
const data= [10,20,30,40,50,60,70,80,90,100]
const chart = document.querySelector('.chart')
const chart1 = document.querySelector('.chart')
for(const num of data) {
    let div = document.createElement('div')
    div.className = 'bar'
    div.textContent = num
    div.style.width = num * 10 + 'px'
    let alpha = num / 100
    div.style.background = `rgba(0,0,255,${alpha})`
    chart.appendChild(div)
}

for(const num of data) {
    let div = document.createElement('div')
    div.className = 'bar1'
    div.textContent = num
    div.style.width = num * 2.5 + 'px'
    div.style.height = num * 2.5 + 'px'
    div.style.lineheight = num * 2.5 + 'px'
    let alpha = 0.5 + num / 200
    div.style.background = `rgba(255,165,0,${alpha})`
    chart1.appendChild(div)
}