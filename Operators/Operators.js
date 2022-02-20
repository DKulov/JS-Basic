//Arithmetic Operators

let x = 10;
let y = 3;

// Addition
console.log(x + y);
// Subtraction
console.log(x - y);
// Subtraction
console.log(x * y);
// Division
console.log(x / y);
// Modulus
console.log(x % y);
// Exponentiation
console.log(x ** y);

// Increment (++)
// (increment before the x)
console.log(++x);
// (now x is 11)

// (increment after the x)
console.log(x++);
// (now x is 10)
// (need another log because the increment took place after the log)
console.log(x);
// (now x is 11 instead of 10)

// Decrement (--)
// All of the above applies to decrement as well.

// Assignment Operators
let x = 10;

// start with
x++;
// is equal to
x = x + 1;
// a shorter way would be
x += 1;
// Another example
x = x + 5;
// equal to
x += 5;
// Another example
x = x * 3;
// equal to
x *= 3;
// Every Arithmetic Operator can be used in a combination.

// Comparison Operators
let x = 1;
// An answer to comparison operators is a Boolean.
// Relational
console.log(x > 0);
console.log(x >= 0);
console.log(x < 0);
console.log(x <= 0);

// Strict Equality (both sides equal in Type and Value)
console.log(x === 1);
console.log(x !== 1);
// Lose Equality (checks only for value)
console.log(x == 1);

// Ternary Operator
// If a customer has more the 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.

let points = 110;
let type = points > 100 ? "gold" : "silver";

console.log(type);

// Logical Operators
// Logical AND (&&)
// Returns TRUE only if both operands are TRUE
// Logical OR (||)
// Returns TRUE if one of the operands are TRUE
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
// Logical NOT (!)
// Converting the boolean
let applicationRefused = !eligibleForLoan;

// Logical Operators with non-booleans

// (Anything that is not false -> Truthy)

let userColor = undefined;
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

// Bitwise operators

console.log(1 | 2); // Bitwise OR
console.log(1 & 2); // Bitwise AND

// Read, Write, Execute
// 00000100 (if the user has only read permissions)
// 00000011 (if the user has only write and execute permissions)
// 00000111 (if the user has all permissions)

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

let message = myPermission & readPermission ? "yes" : "no";

console.log(message);

// Exercise
// The exercise is to swap between the variables.
// so that a will be 'blue' and b will be 'red'
let a = "red";
let b = "blue";

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);
