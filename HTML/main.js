const generateTable = document.querySelector('#generate-table')
const getCode = document.querySelector('#get-code')
const tableCriteria = document.querySelector('.table-criteria')
const tableCreated = document.querySelector('#create-table')
const inputRows = document.querySelector('#rows')
const inputCol = document.querySelector('#columns')
const inputTableWidth = document.querySelector('#table-width')
const inputBorderWidth = document.querySelector('#border-width')
const tableWidth = inputTableWidth.value
const borderWid = inputBorderWidth.value
const errorDiv = document.createElement('div')
const bodyBackCol = document.querySelector('#body-background') 
const headBackCol = document.querySelector('#head-background') 
const bodyFontCol = document.querySelector('#body-color') 
const headFontCol = document.querySelector('#head-color')
const borderCol = document.querySelector('#border-color')
const inputCollapsed = document.querySelector('#border-collapse')
const inputFontWeight = document.querySelector('#font-weight')
const inputTextAlign = document.querySelector('#text-align')
const inputFontSize = document.querySelector('#font-size')
const inputFontType = document.querySelector('#font-type')
const wrapperClass = document.querySelector('.wrapper')

generateTable.addEventListener('click',() => {
   validateTable()
     
}) 

getCode.addEventListener('click', () => {
    tableCreated.textContent = tableCreated.innerHTML
    //tableCreated.textContent = document.documentElement.innerHTML
    
})
const createTable = (noOfRows,noOfCols) => {
 tableCreated.innerHTML = ''   
 let htmlTable = document.createElement('table')
 htmlTable.setAttribute('class','table')
 let tableHeaderRow = document.createElement('tr')
 let borderWid = inputBorderWidth.value
 for (let c= 0; c<noOfCols; c++) {
    let tableHeaderCol = document.createElement('th')
    let headerText = document.createTextNode('Header' + (c+1))
    tableHeaderCol.appendChild(headerText)
    tableHeaderRow.appendChild(tableHeaderCol)
    //tableHeaderCol.style.borderWidth = borderWid +'px'
    tableHeaderCol.style.borderStyle = 'solid'
 }
 let tableBody = document.createElement('tbody')
 tableBody.appendChild(tableHeaderRow)
 for (let r=0;r<noOfRows;r++) {
   let row = document.createElement('tr')
   for(let c=0;c<noOfCols;c++) {
     let col = document.createElement('td')
     let value = document.createTextNode('value')
     col.appendChild(value)
     row.appendChild(col)
     col.style.borderWidth = borderWid +'px'
     col.style.borderStyle = 'solid'
     col.style.fontSize = inputFontSize.value + 'px'
     col.style.textAlign = inputTextAlign.value
     col.style.fontWeight = inputFontWeight.value
     col.style.fontFamily = inputFontType.value
   }
   tableBody.appendChild(row)
 }
 htmlTable.appendChild(tableBody)
 tableCreated.appendChild(htmlTable)
 const inputTableWidth = document.querySelector('#table-width')
 let tableWidth = inputTableWidth.value
 if((tableWidth<1) || !tableWidth.match(/^[0-9]*$/)) {
 htmlTable.setAttribute('width','0%')
 }
 else if (tableWidth>100) {
    errorDiv.textContent = ''  
    errorMessage = '*Enter the width in % less than or equal to 100'
    errorDiv.textContent = errorMessage
    tableCriteria.appendChild(errorDiv)

 }
 else { 
    htmlTable.width = (tableWidth * (screen.width))/100
 }

    
    
    if((borderWid<1) || !borderWid.match(/^[0-9]*$/)) {
    htmlTable.setAttribute('border','0')
 }
 
 else {  
 htmlTable.setAttribute('border',borderWid)
 }
 tableHeaderRow.style.backgroundColor = headBackCol.value
 tableBody.style.backgroundColor = bodyBackCol.value
 tableBody.style.color = bodyFontCol.value
 tableHeaderRow.style.color = headFontCol.value
 htmlTable.style.borderColor = borderCol.value
 htmlTable.style.borderStyle = 'solid'
 if (inputCollapsed.checked == true) {
       htmlTable.style.borderCollapse = 'collapse'  
}
if (inputCollapsed.checked == false) {
    htmlTable.style.borderCollapse = 'separate'
}
 /*table.style.borderTopColor = borderCol.value
 table.style.borderBottomColor = borderCol.value
 table.style.borderLeftColor = borderCol.value
 table.style.borderRightColor = borderCol.value*/
}

const validateTable = () => {
    const noOfRows = inputRows.value
    const noOfCols = inputCol.value     
    let errorMessage = ''
    errorDiv.style.color = 'red'
    errorDiv.style.padding = '0.2rem'
    errorDiv.align = 'left'
    if ((noOfRows<1) || !noOfRows.match(/^[0-9]*$/)) {
      errorDiv.textContent = ''  
      errorMessage = '*Enter the number of rows greater than 0'
      errorDiv.textContent = errorMessage
      tableCriteria.appendChild(errorDiv)
    }
    else if ((noOfCols<1) || !noOfCols.match(/^[0-9]*$/)) {
      errorDiv.textContent = ''
      errorMessage = '*Enter the number of columns greater than 0'
      errorDiv.textContent = errorMessage
      tableCriteria.appendChild(errorDiv)  

    }
    else {
        errorDiv.textContent = ''  
        createTable(noOfRows,noOfCols)
    }
}

