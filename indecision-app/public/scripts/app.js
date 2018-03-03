'use strict';

var nameLet = 'Vishal';

console.log('nameLet:', nameLet);

var nameConst = 'Vishal Vazkar';

function getPetName() {
  var petName = 'Simba';
  return petName;
}

console.log(getPetName());

// Block Scoping
// Block Scoping is not the same as Function Scoping
// IF statement - Block, Function - getPetName()
// const and let are block scoped, var is not BLOCK scoped but only function scoped

var fullName = 'Vishal Vazkar';

if (fullName) {
  var firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log('Block Scope Test Fail Example:', firstName);

// using let and const now
var fullName2 = 'Vishal Vazkar';
// If this let is defined in the if statement block, the outer console log to print the firstName2 will fail.
// That is the advantage of using let and const - the scope is very specific 
var firstName2 = '';

if (fullName2) {
  firstName2 = fullName2.split(' ')[0];
  console.log(firstName2);
}

console.log('Block Scope Test Pass Example:', firstName2);
