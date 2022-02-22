// Exercise calculateGrade

// 1 - 59: F
// 60 - 69: D
// 70 - 79: C
// 80 - 89: B
// 90 - 100: A

const marks = [98, 90, 80];

function calculateAvg(marks) {
  let sum = 0;

  for (i = 0; i < marks.length; i++) sum += marks[i];
  let avg = sum / marks.length;

  return avg;
}

function calculateGrade(marks) {
  let avg = calculateAvg(marks);

  if (avg <= 59) return "F";
  else if (avg <= 69 && avg >= 60) return "D";
  else if (avg <= 79 && avg >= 70) return "C";
  else if (avg <= 89 && avg >= 80) return "B";
  else return "A";
}

console.log(calculateGrade(marks));
