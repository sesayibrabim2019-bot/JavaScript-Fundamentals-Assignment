// 12. Mixed Data Types & Nested Array/Object Access
/*Examine the array below and write JavaScript statements to log the requested values:
let studentProfile = { name: "Foday", age: 34 };
let records = [
  "DICT Department",
  2026,
  true,
  null,
  { name: "Samuel", age: 67 },
  studentProfile,
  ["Cassava", "Plantain", "Mango"],
];
Log the "name" property of the object at index 4 ("Samuel").
Log the "age" property of the studentProfile object inside records (34).
Log "Plantain" from the nested array inside records.
*/

// Answer

let studentProfile = { name: "Foday", age: 34 };

let records = [
  "DICT Department",
  2026,
  true,
  null,
  { name: "Samuel", age: 67 },
  studentProfile,
  ["Cassava", "Plantain", "Mango"],
];

console.log(records[4].name); // Log "Samuel" - object at index 4
console.log(records[5].age); // Log 34 - studentProfile age inside records
console.log(records[6][1]); // Log "Plantain" - nested array