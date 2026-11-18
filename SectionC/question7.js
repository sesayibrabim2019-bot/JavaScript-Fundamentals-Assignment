// Section C: Control Structures (if / else)
/* 7. Authentication Check
Write a program that stores a registered email and password (as a number or string).
Use an if...else statement with strict equality (===) and the logical AND (&&) operator to
check login credentials.
If both match, log "Access Granted: Welcome to the Student Portal". Otherwise, log
"Access Denied: Invalid email or password".
*/

// Answer

let registeredEmail = "student@limkokwing.edu.sl";
let registeredPassword = "2026"; // as string

let loginEmail = "student@limkokwing.edu.sl";
let loginPassword = "2026";

if (loginEmail === registeredEmail && loginPassword === registeredPassword) {
  console.log("Access Granted: Welcome to the Student Portal");
} else {
  console.log("Access Denied: Invalid email or password");
}