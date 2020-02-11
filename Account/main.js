const accountButton = document.querySelector('.account-button')
const accountType = document.querySelector('.amount-type')
const inputDescription = document.querySelector('.description')
const inputAmount = document.querySelector('.amount')
let incomeDiv = document.querySelector('.income-divs')
const expenseDiv = document.querySelector('.total-expense')
const incomeContainer = document.querySelector('.income-container')
const expenseContainer = document.querySelector('.expense-container')
const totalIncome = document.querySelector('#total-income')
const totalExpense = document.querySelector('#total-expense')
const accountBalance = document.querySelector('#account-balance')
const errorDiv = document.querySelector('.error-message')

/*const accountInformation = {
    incomes: [{description: 'Salary',
               amount: 3000,
               time: 'Feb 1, 2020 16:19'},
               {description: 'onlineIncome',
                amount: 1000,
                time: 'Feb 2, 2020 16:19',},
                {description: 'rent',
                 amount: 500,
                 time: 'Feb 3, 2020 16:19'
                }],
    expenses: [{description: 'transport',
                amount:100,
                time: 'Feb 1, 2020 16:19'},
                {description: 'food',
                 amount: 400,
                 time: 'Feb 1, 2020 16:19'},
                 {description: 'fee',
                 amount: 1000,
                 time: 'Feb 1, 2020 16:19'}]
          
    }*/

    const incomesTotal = () => {
        const getAccountInfo = JSON.parse(localStorage.getItem('accountInformation'))
        const values = getAccountInfo.incomes.map(income => income.amount)
        let sum = 0
        for (let value of values) {
        sum = sum + value
        }
        return (sum)

    }

    const expensesTotal = () => {
        const getAccountInfo = JSON.parse(localStorage.getItem('accountInformation'))
        const values = getAccountInfo.expenses.map(income => income.amount)
        let sum = 0
        for (let value of values) {
        sum = sum + value
        }
        return (sum)

    }

    const balanceAccount = () => {
        const incomeTotal = incomesTotal()
        const expenseTotal = expensesTotal()
        const accountBalance = incomeTotal - expenseTotal
        return accountBalance

    }

    const addIncome = (description,amount) => {
        const getAccountInfo = JSON.parse(localStorage.getItem('accountInformation'))
        getAccountInfo.incomes.push({description: description,amount: Number(amount),time: dateToday()})
        const setAccountInfo = JSON.stringify(getAccountInfo)
        localStorage.setItem('accountInformation',setAccountInfo)
        const addedIncomes = JSON.parse(localStorage.getItem('accountInformation'))
        displayAccountInfo(addedIncomes)

    }

    const addExpense = (description,amount) => {
        const getAccountInfo = JSON.parse(localStorage.getItem('accountInformation'))
        getAccountInfo.expenses.push({description: description,amount: Number(amount),time:dateToday()})
        const setAccountInfo = JSON.stringify(getAccountInfo)
        localStorage.setItem('accountInformation',setAccountInfo)
        const addedExpenses = JSON.parse(localStorage.getItem('accountInformation'))
        displayAccountInfo(addedExpenses)

    }

    const errorStyles = (errorMessage,searchField) => {

        errorDiv.textContent = ''
        errorDiv.style.display = 'block'
        errorDiv.style.color = 'red'
        errorDiv.textContent = errorMessage
        searchField.style.borderColor = 'red'
        searchField.style.borderStyle = 'thin'
    
    }
    const defaultBorder = (searchField) => {
        searchField.style.borderColor = 'darkgray'
    }
    
    const validateInputs = () => {
        let pattern1 = /^[A-Z]+$/ig
        let pattern2 = /^[0-9]+$/
        const inputValue = accountType.value
        const description = inputDescription.value
        const amount = inputAmount.value
        if(description.length == 0) {
            let errorMessage = '*Description is required'
            errorStyles(errorMessage,inputDescription)
            defaultBorder(inputAmount,accountType)
        }
        else if (!(description.match(pattern1))){
            let errorMessage = '*Please enter only alphabets'
            errorStyles(errorMessage,inputDescription)
            defaultBorder(inputAmount,accountType)
        }
        else if (amount.length == 0){
            let errorMessage = '*Amount is required'
            errorStyles(errorMessage,inputAmount)
            defaultBorder(inputDescription,accountType)
        }
        else if(!(amount.match(pattern2))) {
            let errorMessage = '*Please enter only digits'
            errorStyles(errorMessage,inputAmount)
            defaultBorder(inputDescription,accountType)
        }
        else if(inputValue == 'select') {
            let errorMessage = 'Please select the account header'
            errorStyles(errorMessage,accountType)
            defaultBorder(inputAmount,inputDescription)
        }
        else {

            if(inputValue == 'Income') {
                addIncome(description,amount)
            }
            if(inputValue == 'Expense') {
                addExpense(description,amount)
            }

            location.reload()
 
        }
    }
    
    accountButton.addEventListener('click',event => {
      validateInputs()  
    })

    const displayAccountInfo = accountInfo => {
        incomeContainer.textContent = ''
        expenseContainer.textContent = ''
        totalIncome.textContent = ''
        totalExpense.textContent = ''
        errorDiv.textContent = ''
        const incomes = accountInfo.incomes
        const expenses = accountInfo.expenses
        for (const income of incomes) {
            incomeContainer.innerHTML+= 
            `<div class = "income-divs">
             <div class = "income-description">${income.description}</div>
             <div class = "income-amount">${income.amount + "\u20AC"}</div>
             <div class = "income-time">${income.time}</div>
            </div>`
           
        }

        totalIncome.textContent = incomesTotal() + "\u20AC"

        for(const expense of expenses) {
            expenseContainer.innerHTML+=
            `<div class = "expense-divs">
            <div class = "expense-description">${expense.description}</div>
            <div class = "expense-amount">${expense.amount + "\u20AC"}</div>
            <div class = "expense-time">${expense.time}</div>
           </div>`
     
            

        }

        totalExpense.textContent = expensesTotal() + "\u20AC"
        accountBalance.textContent = balanceAccount() + "\u20AC"
        
    }
    
    //const setAccountInfo = JSON.stringify(accountInformation)
   // localStorage.setItem('accountInformation',setAccountInfo)
    const getAccountInfo = JSON.parse(localStorage.getItem('accountInformation'))
    displayAccountInfo(getAccountInfo)