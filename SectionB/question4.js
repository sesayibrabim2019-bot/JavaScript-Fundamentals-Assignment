// Section B: Strings, Indexing, Methods & Template Literals
/*4. String Indexing & Abbreviations
Complete the abbreviation exercise below using string indexing ([] ) so that each abbreviation
extracts only the first letter of each name:

let name1 = "Franklina Fatmata Nylanda";
let name2 = "Hawanatu Mariama Conteh";
let name3 = "Despitch Brian Alliu";
// Write code for abbr1, abbr2, and abbr3 below:
*/

//Answer

let name1 = "Franklina Fatmata Nylanda";
let name2 = "Hawanatu Mariama Conteh";
let name3 = "Despitch Brian Alliu";

// Using string indexing [] - get first letter of each word
// name1[0]=F, name1[10]=F (after first space), name1[18]=N (after second space)
let abbr1 = name1[0] + name1[name1.indexOf(" ") + 1] + name1[name1.lastIndexOf(" ") + 1];
let abbr2 = name2[0] + name2[name2.indexOf(" ") + 1] + name2[name2.lastIndexOf(" ") + 1];
let abbr3 = name3[0] + name3[name3.indexOf(" ") + 1] + name3[name3.lastIndexOf(" ") + 1];

console.log("Abbr1:", abbr1); // FFN
console.log("Abbr2:", abbr2); // HMC
console.log("Abbr3:", abbr3); // DBA