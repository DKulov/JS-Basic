// Exercise showNumbers

// Takes a parameter called 'Limit'
// log 'Even' if the number is even
// log 'Odd' if the number is odd
// log all the number between 0 - 'Limit'

function showNumbers(Limit) {
  for (let i = 0; i < Limit; i++) {
    if (i % 2 !== 0) console.log(i, "Odd");
    else console.log(i, "Even");
  }
}

showNumbers(10);
