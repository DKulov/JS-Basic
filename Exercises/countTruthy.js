// Exercise touchTruthy

// Gets an array and counts the number of Truthy values in the array

function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}

let values = [1, NaN, undefined, true];

console.log(countTruthy(values));
