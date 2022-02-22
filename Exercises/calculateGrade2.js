// Exercise calculateGrade (same but with switch..case)

// 1 - 59: F
// 60 - 69: D
// 70 - 79: C
// 80 - 89: B
// 90 - 100: A

const marks = [90, 90, 90];

function calculateAvg(marks) {
  let sum = 0;

  for (i = 0; i < marks.length; i++) sum += marks[i];
  let avg = sum / marks.length;

  return avg;
}

function whatIsMyGrade(marks) {
  let avg = calculateAvg(marks);

  switch (avg) {
    case avg <= 59:
      return "F";
      break;

    case avg <= 69 && avg >= 60:
      return "D";
      break;

    case avg <= 79 && avg >= 70:
      return "C";
      break;

    case avg <= 89 && avg >= 80:
      return "B";
      break;

    default:
      return "A";
  }
}

console.log(whatIsMyGrade(marks));
