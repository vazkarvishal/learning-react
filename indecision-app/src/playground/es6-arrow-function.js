// learning arrow function
// arrow functions are annonymous. they cannot have a name
// e.g function helloWorld() was the old way
// const helloWorld = (x) => { your logic goes here }
//normal function
const square = function (x) {
  return x * x;
}

console.log (square(6))

// arrow function
const squareArrow = (x) => {
  return x * x
}

console.log(squareArrow(5))

// arrow function expression example

const squareArrowExpression = (x) => x * x
console.log(squareArrowExpression(6))

//challenge
const getFirstName = (fullName) => {

  if (fullName){
    const firstName = fullName.split(' ')[0]
    return ('The First Name is:', firstName)
  } else {
    return ('No name was passed')
  }

}

console.log ('General Arrow Function Example', getFirstName('Vishal Vazkar'))

// challenge2 use arrow function with expression syntax

const getFullNameExpression = (fullName) => fullName ? fullName.split(' ')[0] : 'No string was passed in the function'
console.log('Expression Syntax Example', getFullNameExpression('Vishal Vazkar'))