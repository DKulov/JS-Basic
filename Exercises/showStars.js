// Exercise Show Stars

function showStars(rows) {
  let string = "";

  for (let i = 0; i <= rows; i++) {
    for (let j = 0; j < i; j++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}

showStars();
