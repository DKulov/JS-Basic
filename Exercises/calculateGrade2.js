// Exercise calculateGrade (same but with switch..case and .reduce)

// 1 - 59: F
// 60 - 69: D
// 70 - 79: C
// 80 - 89: B
// 90 - 100: A

const marks = [50, 50, 60];

function getGradesAverage(marks) {
  let average =
    marks.reduce((total, currentValue) => total + currentValue, 0) /
    marks.length;
  return average;
}

function averageToGrade(average) {
  switch (true) {
    case average <= 59:
      return "Your grade is F";

    case average <= 69:
      return "Your grade is D";

    case average <= 79:
      return "Your grade is C";

    case average <= 89:
      return "Your grade is B";

    default:
      return "Your grade is A";
  }
}

function whatIsMyGrade(marks) {
  return averageToGrade(getGradesAverage(marks));
}

console.log(whatIsMyGrade(marks));
