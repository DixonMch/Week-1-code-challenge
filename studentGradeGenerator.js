// Prompt the user for input
let marks = prompt("Enter student marks (0-100): ");

// Convert input to a number
marks = Number(marks);

// Check the range of marks and assign the appropriate grade
let grade;
if (marks > 79) {
  grade = "A";
} else if (marks >= 60 && marks <= 79) {
  grade = "B";
} else if (marks >= 50 && marks <= 59) {
  grade = "C";
} else if (marks >= 40 && marks <= 49) {
  grade = "D";
} else {
  grade = "E";
}

// Output the grade
console.log(`The student's grade is ${grade}.`);

