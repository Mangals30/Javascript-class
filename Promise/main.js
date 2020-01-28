console.log('Welcome to promise')
const square = (n) => n*n
const higherOrderFun = (callback) => {

    console.log('This is a higher order function')
    console.log(callback(2))
    return callback(2)
}
console.log(higherOrderFun(square))

const callback = (err,result) => {
    if(err) {
        return console.log(err)
    }
    return console.log(result)
}

const doSomething = callback => {
    setTimeout (() =>{
        const skills = ['HTML','CSS','JS']
        callback('It didnt go well',skills)
        callback(false,skills)
    },2000)
}
console.log(doSomething(callback))
const doPromise = new Promise((resolve,reject) => {
    console.log(resolve('hi, success'))
    console.log(reject('It didnt go well'))
    console.log(resolve('It goes well'))
    

})
doPromise.then((result) => {
    console.log(result)
})

const doPromise1 = new Promise((resolve,reject) => {
    setTimeout (() =>{
        const skills = []
        if(skills.length>0) {
            resolve(skills)
        }
        else{
            reject('Something is wrong')
        }
    },2000)

})
doPromise1.then((result) => {
    console.log(result)
},(error) => {
    console.log(error)
})

doPromise1.then((result) => {
    console.log(result)
}).catch(error => {
    console.log(error)
})

console.log(doPromise1)

const url = 'https://restcountries.eu/rest/v2/all'
//fetch
fetch(url).then((response) => {
    return response.json()
}).then((data) => {
    console.log('hi')
}).catch((err)=> {
    console.log(err)
})

/*const url1 = 'https://restcountries.eu/rest/v2/alll'
//fetch
fetch(url1).then((response) => {
    return response.json()
}).then((data) => {
    console.log(data)
}).catch((err)=> {
    console.log(err.message)
})*/

//async and await
//async returns a promise

const sq = async function (n) {
    let result = await (n*n)
    return result
}
let value = sq(2)
console.log(value)

const fetchData = async () => {
    try {
      const response = await fetch(url)
      const countries = await response.json()
      return countries
    } catch (err) {
      return err.message
    }
  }
  console.log('===== async and await')
  let datas = fetchData()
  console.log(datas)

  const fetchData1 = async () => {
    try {
      const response = await fetch(url1)
      const countries = await response.json()
      console.log(countries)
    } catch (err) {
      console.log(err.message)
    }
  }
  console.log('===== async and await')
  fetchData1()