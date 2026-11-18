// 5. String Methods, Method Chaining & Formatting
/*Given let rawEmail = "Student.DICT@Limkokwing.EDU.SL";:
Convert the email to all lowercase and check if it .includes("limkokwing") in a single chained
line.
Print the total character length of the string using .length.
Using escape characters (\t and \n), log a formatted two-line receipt showing
"Faculty:\tDICT" on the first line and "Campus:\tFreetown" on a new line
*/

// Answer

let rawEmail = "Student.DICT@Limkokwing.EDU.SL";

// Convert to lowercase and check if it includes "limkokwing" in ONE chained line
console.log(rawEmail.toLowerCase().includes("limkokwing")); // true

// Print total character length
console.log("Length:", rawEmail.length);

// Using escape characters \t and \n for formatted receipt
console.log("Faculty:\tDICT\nCampus:\tFreetown");