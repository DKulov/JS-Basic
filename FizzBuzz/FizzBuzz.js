// Exercise FizzBuzz

// instructions
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by Both => FizzBuzz
// Not Divisible by 3 or 5 => input
// Not a Number => 'Not A Number'

function fizzBuzz(input) {
  if (typeof input !== "number") return NaN;
  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return "Buzz";
  return input;
}

const output = fizzBuzz();
console.log(output);
