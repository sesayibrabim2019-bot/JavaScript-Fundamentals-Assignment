// 6. Concatenation vs. Template Literals
/*Create variables for courseName, lecturerName, creditHours, and semester.
Print a complete sentence introducing the course using standard + string concatenation.
Calculate the average of three test scores (68, 74, 89) and print the result using template
literals (backticks ` ` and ${})
*/

// Answer

let courseName = "JavaScript Fundamentals";
let lecturerName = "Mr Amadu Kamara";
let creditHours = 3;
let semester = "First Semester";

// 1. Standard + concatenation
console.log(
  "The course " +
    courseName +
    " is taught by " +
    lecturerName +
    " for " +
    creditHours +
    " credit hours in " +
    semester +
    ".",
);

// 2. Average using template literals
let score1 = 68,
  score2 = 74,
  score3 = 89;
let average = (score1 + score2 + score3) / 3;
console.log(`The average score is ${average.toFixed(2)} for ${courseName}`);
