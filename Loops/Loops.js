// Loop types

// For Loop

// Shows only uneven numbers (Example)
for (let i = 0; i < 6; i++) {
  if (i % 2 !== 0) console.log(i);
}

// While Loop

let i = 0;
while (i < 6) {
  if (i % 2 !== 0) console.log(i);
  i++;
}

// Do..While Loop

let i = 0;
do {
  if (i % 2 !== 0) console.log(i);
  i++;
} while (i < 6);

// Examples of infinite loops

// let i = 0;
// while (i < 5) {
//     console.log(i);
// }

// while(true) {
// }

// let x = 0;
// do {

// } while (x < 5);

// for (let i = 0; i > 0; i++)

// for (let i = 0; i < 10)

// For..in Loop

const person = {
  name: "Dan",
  age: 30,
};

for (let key in person) console.log(key, person[key]);

const colors = ["red", "green", "blue"];
for (let index in colors) console.log(index, colors[index]);

// For..of Loop
const colors = ["red", "green", "blue"];
for (let color of colors) console.log(color);

// Break and Continue
// Break

let i = 0;
while (i <= 10) {
  if (i === 5) break;

  console.log(i);
  i++;
}

// Continue

let i = 0;
while (i <= 10) {
  if (i % 2 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}

// To sum up
// the Break keyword jumps out of a loop
// and the continue keyword jumps to the next iteration.

// Exercise

let number = max(1, 2);

function max(a, b) {
  if (a > b) return a;
  return b;
}

// Can also write like
function max(a, b) {
  return a > b ? a : b;
}

// Another Exercise
let a = width;
let b = height;
function isLandscape(a, b) {
  if (a > b) return true;
  else return false;
}

// Can also write like
function isLandscape(width, height) {
  return width > height;
}
