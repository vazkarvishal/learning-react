// function defaults can be defined in the constructor definition

class Person {
  constructor(name = 'No name', age = 0) {
    this.name = name
    this.age = age
  }

  getGreeting() {
    return `Hi. I am ${this.name}!`
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    // super is used to override parent classes and reuse predefined objects
    super(name, age)
    this.major = major 
  }

  hasMajor() {
    return !!this.major
  }

  getDescription() {
    let description = super.getDescription()

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`
    }
    return description
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name,age)
    this.homeLocation = homeLocation
  }

  hasHomeLocation() {
    // will return true if there is a home location or else will return false
    return !!this.homeLocation
  }
  getGreeting() {
    let greeting = super.getGreeting()

    if (this.hasHomeLocation()) {
      greeting += ` I am visiting from ${this.homeLocation}.`
    }
    return greeting
  }
}
// declared values
const me = new Traveler('Vishal Vazkar', 26, 'India')
// const me = new Student('Vishal Vazkar', 26, 'Computer Science')
console.log(me)
console.log(me.hasHomeLocation())
console.log(me.getGreeting())
// console.log (me.getGreeting())
// console.log (me.getDescription())

//empty values
const other = new Traveler()
console.log(other.hasHomeLocation())
// const other = new Student()
console.log(other.getGreeting())
// console.log(other.getGreeting())
// console.log(other.getDescription())