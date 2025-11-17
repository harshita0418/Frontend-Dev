"use strict";

function showMessage() {
    let greeting = "Welcome";
    console.log(greeting);
}

showMessage();

console.log("\nExplanation:");
console.log("In strict mode, all variables must be declared with var, let, or const.");
console.log("Without declaration, it throws a ReferenceError.");
console.log("Fixed by adding 'let' before greeting variable.");
