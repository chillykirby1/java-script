

//fizzbuz system code
function fizzBuzz (input) {
  if ((input % 3 === 0 ) && (input % 5 === 0)) return 'FizzBuzz'; //divisable by neither
  if (input % 3 === 0) return "Fizz"; //divisable by 3
  if (input % 5 === 0) return 'Buzz'; //divisable by 5
  if (typeof input !=='number') return 'This is not a number.'; //NaN
  return "This test number does nothing important. The input was " + input + ".";
}

//number testing area
const testNumber = ; //number goes here
console.log(fizzBuzz(testNumber));
