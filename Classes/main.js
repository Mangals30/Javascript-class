//Class is a blueprint to create objects
//They have properties and methods
//Classes are creators of objects
const rect = {
    width: 20,
    height:10
}

class ClassName {


}

class Rectangle {
    //constructor (width,height)
    constructor (width,height=20)
    //constructor (width,height=20,area)
     {  //this.area = area
        this.width = width 
        this.height = height
        console.log(this)
    }

}

const rectangle1 = new Rectangle(20,10)
const rectangle2 = new Rectangle(30)
const rectangle3 = new Rectangle(40)
const rectangle4 = new Rectangle(50)
console.log(rectangle1)
console.log(rectangle2)
console.log(rectangle3)
console.log(rectangle4)

class Person {
    constructor(firstName,lastName,age,country) {
         this.firstName = firstName
         this.lastName = lastName
         this.age = age
         this.country = country
         this.score = 10
         this.skill = []
    }
    getFullName () {
        //let FullName = firstName + ' ' + lastName
        let FullName = this.firstName + ' ' + this.lastName
        return FullName
    }
    get getScore () {
        return this.score
    }
    set setScore (score) {
        this.score +=score
    }
    addSkill (skill) {
        this.skill = skill
    }
    static favouriteSkill() {
        const skills = ['HTML','CSS','Javascipt','MongoDB','NodeJS']
        let index = Math.floor(Math.random()*skills.length)
        return skills[index]
    }
    

}

const person1 = new Person ('Mangalam','Krishnan',20,'India')
console.log(person1)
const person2 = new Person('Sanjay','Jayaraman',30,'Finaland')
console.log(person2)
const person3 = new Person('Sanjay')
//console.log(person3.getFullName())
console.log(person1.getFullName())
console.log(person2.getFullName())
console.log(person3.getFullName())

//console.log(person1.getFullName)
//console.log(person2.getFullName)
//console.log(person3.getFullName)
console.log(person1.getScore)
person1.setScore = 50
//console.log(this.setScore)
console.log(person1.getScore)
person1.addSkill('HTML')
person1.addSkill('CSS')
person1.addSkill('Javascript')
console.log(person1)
//class ChildName extends Parent {

//}
// example of inheritance
class Student extends Person {
  constructor(firstName,lastName,age,country,gender) {
      super(firstName,lastName,age,country)
      this.gender= gender
  }
    
}

class Person1 {
    constructor(firstName,lastName,age,country) {
         this.firstName = firstName
         this.lastName = lastName
         this.age = age
         this.country = country
         this.score = 10
         this.skill = []
         
    }
}
const student1 = new Student('Sophia','Saga','2','USA','Male')
console.log(student1)// takes the default value of the parent
//  console.log(person1.favouriteSkill())
console.log(Person.favouriteSkill())







