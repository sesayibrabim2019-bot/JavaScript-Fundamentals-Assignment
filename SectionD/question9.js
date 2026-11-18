// Section D: JavaScript Objects & Nested Structures
/* 9. Object Manipulation (Read, Update, Add)
Create an object named course with the properties: code ("BSEM2104"), title ("Web
Development"), lecturer ("Amadu Kamara"), credits (3), and isCore (true).
Log the title property to the console.
Update lecturer to "Samuel Amkam".
Add a new property room set to "Lab 4", then log the updated course object
*/

// Answer

let course = {
  code: "BSEM2104",
  title: "Web Development",
  lecturer: "Amadu Kamara",
  credits: 3,
  isCore: true
};

console.log(course.title); // Log title

course.lecturer = "Samuel Amkam"; // Update

course.room = "Lab 4"; // Add new property

console.log(course); // Log updated object