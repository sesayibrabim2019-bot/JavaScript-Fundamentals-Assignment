// 2. Loose vs. Strict Equality ( == vs. === / != vs. !== )
/* Predict the exact output (true or false ) of each statement below without running the code, and
briefly explain why:

let codeA = "100";
let codeB = 100;

console.log(codeA == codeB);
console.log(codeA === codeB);
console.log(codeA != codeB);
console.log(codeA !== codeB);
*/
// Answer

let codeA = "1OO";
let codeB = 100;

console.log(codeA == codeB); // True - Loose equality does type coercion, string "100" becomes number 100
console.log(codeA === codeB); // False - Strict equality checks Value AND type, string !== NUMBER
console.log(codeA != codeB); // False - Loose not equal, after coercion they are equal, so not different
console.log(codeA !== codeB); // True - Strict not equal, types are different
