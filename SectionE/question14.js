// 14. Building an Array of Objects (Database Simulation)
/* Create an empty array named lecturersDb .
Using the.push() method, insert 3 lecturer objects into . Each object must
contain the properties: id , fullName , department , and phoneNumber
Print the entire lecturersDb array to the console
Access and log only the fullName and 
phoneNumber of the second lecturer in lecturersDb
using a template literal.
*/

// Answer

let lecturersDb = [];

// Insert 3 lecturer objects using push
lecturersDb.push(
  {
    id: 1,
    fullName: "Amadu Kamara",
    department: "DICT",
    phoneNumber: "076123456",
  },
  {
    id: 2,
    fullName: "Samuel Amkam",
    department: "DICT",
    phoneNumber: "077987654",
  },
  {
    id: 3,
    fullName: "Salu Conteh",
    department: "Networking",
    phoneNumber: "088112233",
  },
);

console.log(lecturersDb);

// Access and log only fullName and phoneNumber of second lecturer using template literal
console.log(
  `Second Lecturer: ${lecturersDb[1].fullName}, phone: ${lecturersDb[1].phoneNumber}`,
);
