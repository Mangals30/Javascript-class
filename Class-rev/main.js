class Person {
    constructor (firstName,lastName,age) {
        
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.score = 0
        this.skills = []
        console.log('This inside constructor',this)
    }
    getFullName () {
        return this.firstName + ' ' + this.lastName
    }
    get getScore () {
        return this.score
    }
    set setScore(score) {
       this.score += score
    }
    addSkill (skill) {
        this.skills = [...this.skills,...skill]
        //this.skills.push(skill)
    }
    static favouriteSkill () {
        const skills = ['HTML', 'CSS','JS','React']
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
    }
    getPersonInfo () {
        let fullName = this.getFullName()
        return `${fullName} is ${this.age}.`
    }
}

const p1 = new Person('Mangalam','Krishnan',30)
const p2 = new Person ('Sanjay','Jayaraman',35)
console.log(p1,p2)
console.log(p1.getFullName(), p2.getFullName())
console.log(p1.getScore,p2.getScore) //No need of ()
p1.setScore = 10
console.log(p1.getScore,p2.getScore)
p1.addSkill(['React','MongoDB','NodeJS'])
console.log(p1,p2)
console.log(Person.favouriteSkill())

class Student extends Person {
  constructor(firstName,lastName,age,country) {
      super(firstName,lastName,age)
      this.country = country
  }
  getPersonInfo() {
      return `${this.getFullName()} is ${this.age}.He is from ${this.country}`
}

}
const s1 = new Student('John','David',21,'Finland')
console.log(Student.favouriteSkill())
console.log(p1.getPersonInfo())
console.log(s1.getPersonInfo())