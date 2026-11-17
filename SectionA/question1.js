// 1. Arithmetic & Modulus Operations
/* Declare two variables price = 45 and quantity = 4 . Calculate and log:
Total cost (*)
Discounted cost after subtracting 15 (-)
Cost split equally among 3 friends (/)
The leftover amount when total cost is divided by 7 (%)
*/

// Answer

let price = 45;
let quantity = 4;

let totalCost = price * quantity; // * operator
let discountedCost = totalCost - 15; // - operator
let splitCost = totalCost / 3; // / operator
let leftover = totalCost % 7; // % operator

console.log("Total cost:", totalCost); // 180
console.log("Discounted cost:", discountedCost); // 165
console.log("Cost split among 3:", splitCost); // 60
console.log("Leftover when divided by 7:", leftover); // 5