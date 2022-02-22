// Exercise calculateGrade (same but with switch..case and .reduce)

// 1 - 59: F
// 60 - 69: D
// 70 - 79: C
// 80 - 89: B
// 90 - 100: A

const marks = [90, 90, 60];

function getAverage(marks) {
  return (
    marks.reduce((total, currentValue) => total + currentValue, 0) /
    marks.length
  );
}

function averageToGrade() {
  let average = getAverage(marks);

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

console.log(averageToGrade());
