// 3. Logical Operators (&& , ||, !)
/* Given let username = "lecturer_dict"; and let pin = "2026"; , write three console.log()
expressions that demonstrate:
Using && where the final output is false because of a data-type mismatch on pin .
Using || where the first condition is false and the second is true .
Using ! to check if username is not strictly equal to "admin"
*/

// Answer

let username = "lecturer_dict"
let pin = "2026"

// 1. Using && where final output is false because of data-type mismatch on pin
// pin is string "2026" but we check against number 2026 wuth strict equality
console.log(username === "lecturer_dict" &&pin === 2026) // false

// 2. Using || where first condition is false and second is true
console.log(username === "admin" || pin === "2026") // false|| true = true

// 3. Using ! to check if username is not strictly equal to "admin"
console.log(!(username === "admin")); // true- username is NOT admin
console.log(username !== "admin"); // Alternative with !