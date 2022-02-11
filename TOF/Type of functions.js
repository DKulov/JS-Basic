// Functions that perform a task
// First function
function greet() {
  console.log("Hello World");
}

greet();

// Second Function
function meet(name, lastName) {
  console.log("Meet " + name + " " + lastName);
}
meet("John", "Smith");

// Functions that calculate a value
function square(number) {
  return number * number;
}
// one way to execute
let number = square(2);
console.log(number);

// second way to execute
console.log(square(3));
