//challenge

const multiplier = {
  // numbers - array of numbers
  numbers: [1, 2, 3],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy)
  }
  // multiplyBy - single number
  // multiply - return a new array where the numbers have been multiplied


}

console.log (multiplier.multiply())